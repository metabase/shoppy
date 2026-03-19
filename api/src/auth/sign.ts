import jwt from "jsonwebtoken"

import { User } from "../types/user"
import {
  METABASE_JWT_SHARED_SECRET,
  METABASE_GUEST_SECRET,
} from "../constants/env"

export const signUserToken = (user: User): string => {
  if (!METABASE_JWT_SHARED_SECRET) {
    throw new Error("METABASE_JWT_SHARED_SECRET is not set in the environment!")
  }

  return jwt.sign(
    {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      groups: [user.group],
      shop_id: user.shopId,
      exp: Math.round(Date.now() / 1000) + 60 * 0.25, // 1.1 minute expiration
    },
    METABASE_JWT_SHARED_SECRET,
  )
}

export const signGuestToken = ({
  resourceType,
  resourceId,
  params = {},
}: {
  resourceType: "question" | "dashboard"
  resourceId: string | number
  params?: Record<string, unknown>
  user?: User
}): string | null => {
  if (!METABASE_GUEST_SECRET) {
    throw new Error("METABASE_GUEST_SECRET is not set in the environment!")
  }

  const resource = { [resourceType]: resourceId }
  return jwt.sign(
    {
      resource,
      params,
      exp: Math.round(Date.now() / 1000) + 5, // 5 second
    },
    METABASE_GUEST_SECRET,
  )
}
