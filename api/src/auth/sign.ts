import { User } from "../types/user"
import { METABASE_JWT_SHARED_SECRET } from "../constants/env"
import { createHmac } from "crypto"

export const signUserToken = (user: User): string => {
  if (!METABASE_JWT_SHARED_SECRET) {
    throw new Error("METABASE_JWT_SHARED_SECRET is not set in the environment!")
  }

  return signJwt(
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

interface JWTpayload {
  email: string
  first_name: string
  last_name: string
  groups?: string[]
  shop_id: number
  exp: number
}

const signJwt = (payload: JWTpayload, secret: string): string => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  }

  const base64UrlEncode = (str: string): string => {
    return Buffer.from(str, "utf-8").toString("base64url")
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signatureInput = `${encodedHeader}.${encodedPayload}`

  const signature = createHmac("sha256", secret)
    .update(signatureInput)
    .digest("base64url")

  return `${signatureInput}.${signature}`
}
