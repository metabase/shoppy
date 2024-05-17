import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT ?? 3003

export const METABASE_INSTANCE_URL =
  process.env.METABASE_INSTANCE_URL ?? "http://localhost:3000"

export const METABASE_JWT_SHARED_SECRET =
  process.env.METABASE_JWT_SHARED_SECRET ??
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

export const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3004"

export const SESSION_SECRET =
  process.env.SESSION_SECRET ?? "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

export const {
  VERCEL_ENV,
  VERCEL_URL,
  VERCEL_BRANCH_URL,
  VERCEL_PROJECT_PRODUCTION_URL,
} = process.env
