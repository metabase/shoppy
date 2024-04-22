export const METABASE_SITE_URL =
  process.env.METABASE_SITE_URL ?? "http://localhost:3000"

export const METABASE_JWT_SHARED_SECRET =
  process.env.METABASE_JWT_SHARED_SECRET ??
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

export const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3004"

export const SESSION_SECRET =
  process.env.SESSION_SECRET ?? "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
