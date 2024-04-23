import { migrate } from "drizzle-orm/postgres-js/migrator"

import { db, pg } from "../src/utils/db"

async function applyMigration() {
  console.log("applying migration")

  await migrate(db, { migrationsFolder: "./drizzle" })
  await pg.end()

  console.log("migration complete")
}

applyMigration()
