import {
  bigint,
  numeric,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core"

import { people } from "./people"
import { products } from "./products"

export const orders = pgTable("orders", {
  id: serial("id").primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  productId: bigint("product_id", { mode: "number" }).references(
    () => products.id,
  ),
  quantity: numeric("quantity").default("1").notNull(),
  totalPrice: numeric("total_price").notNull(),
  discountApplied: numeric("discount_applied").default("0").notNull(),
  customerId: bigint("customer_id", { mode: "number" }).references(
    () => people.id,
  ),
})
