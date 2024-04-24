import { pgTable, bigint, timestamp, varchar, text } from "drizzle-orm/pg-core"
import { shops } from "./shops"

export const productCategories = pgTable("product_categories", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  shopId: bigint("shop_id", { mode: "number" })
    .notNull()
    .references(() => shops.id),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  name: varchar("name").notNull(),
  description: text("description"),
})
