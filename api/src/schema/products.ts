import {
  bigint,
  numeric,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

import { productCategories } from "./product-categories"
import { shops } from "./shops"
import { relations } from "drizzle-orm"

export const products = pgTable("products", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: varchar("title").notNull(),
  description: text("description"),
  imageUrl: varchar("image_url"),
  price: numeric("price").notNull(),
  categoryId: bigint("category_id", { mode: "number" }).references(
    () => productCategories.id,
  ),
  discount: numeric("discount").notNull(),
  shopId: bigint("shop_id", { mode: "number" })
    .notNull()
    .references(() => shops.id),
})

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(productCategories, {
    fields: [products.categoryId],
    references: [productCategories.id],
  }),
}))
