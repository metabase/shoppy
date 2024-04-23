import { migrate } from "drizzle-orm/postgres-js/migrator"

import { db, pg } from "../src/utils/db"

async function applyMigration() {
  await migrate(db, { migrationsFolder: "./drizzle" })
  await pg.end()
}

applyMigration()
