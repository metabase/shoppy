import { bigint, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const shops = pgTable("shops", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  name: varchar("name").notNull(),
  description: text("description"),
})
