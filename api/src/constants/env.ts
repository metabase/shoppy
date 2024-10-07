import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT ?? 3003

export const METABASE_INSTANCE_URL =
  process.env.METABASE_INSTANCE_URL ?? "http://localhost:3000"

export const METABASE_JWT_SHARED_SECRET = process.env.METABASE_JWT_SHARED_SECRET

export const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3004"

export const { VERCEL_ENV } = process.env
