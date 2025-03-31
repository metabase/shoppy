import { migrate } from "drizzle-orm/postgres-js/migrator"
import { sql } from "drizzle-orm"

import { db, pg } from "../src/utils/db"

async function applyMigration() {
  console.log("applying migration")

  // Cleanup db to reinitialize it from scratch
  await db.execute(sql`
    DO $$ DECLARE
      r RECORD;
    BEGIN
      EXECUTE 'DROP SCHEMA IF EXISTS drizzle CASCADE';
      EXECUTE 'DROP SCHEMA IF EXISTS public CASCADE';
      EXECUTE 'CREATE SCHEMA public';
      EXECUTE 'GRANT ALL ON SCHEMA public TO shoppy';
    END $$;
  `)

  await migrate(db, {
    migrationsFolder: "./drizzle",
    migrationsTable: "_drizzle_migrations",
  })
  await pg.end()

  console.log("migration complete")
}

applyMigration()
