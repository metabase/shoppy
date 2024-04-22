import { bigint, pgTable, timestamp } from "drizzle-orm/pg-core"

export const orders = pgTable("orders", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})
