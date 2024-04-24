import type { Config } from "drizzle-kit"

import Dotenv from "dotenv"

Dotenv.config()

const DB_URL = process.env.DB_URL
if (!DB_URL) throw new Error("Please set the DB_URL environment variable")

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: { connectionString: DB_URL },
} satisfies Config
