import Dotenv from "dotenv"
import postgres from "postgres"

import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"

Dotenv.config()

const DB_URL = process.env.DB_URL

async function applyMigration() {
  if (!DB_URL) throw new Error("Please set the DB_URL environment variable")

  const sql = postgres(DB_URL, { max: 1 })
  const db = drizzle(sql)

  await migrate(db, {
    migrationsFolder: "./drizzle",
  })

  await sql.end()
}

applyMigration()
