import { User } from "../types/user"
import { METABASE_JWT_SHARED_SECRET } from "../constants/env"

export const signUserToken = async (user: User): Promise<string> => {
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

interface JwtPayload {
  email: string
  first_name: string
  last_name: string
  groups?: string[]
  shop_id: number
  exp: number
}

const signJwt = async (
  payload: JwtPayload,
  secret: string,
): Promise<string> => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  }

  const base64UrlEncode = (str: string): string => {
    return Buffer.from(str)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "")
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signatureInput = `${encodedHeader}.${encodedPayload}`

  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signatureInput),
  )

  const encodedSignature = base64UrlEncode(
    String.fromCharCode(...new Uint8Array(signature)),
  )

  return `${signatureInput}.${encodedSignature}`
}
