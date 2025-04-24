import { pgTable, bigint, text } from "drizzle-orm/pg-core"
import { shops } from "./shops"

export const people = pgTable("people", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  address: text("address"),
  email: text("email"),
  encryptedPassword: text("encrypted_password"),
  name: text("name"),
  city: text("city"),
  longitude: text("longitude"),
  state: text("state"),
  source: text("source"),
  birthDate: text("birth_date"),
  zip: bigint("zip", { mode: "number" }),
  latitude: text("latitude"),
  createdAt: text("created_at"),
  shopId: bigint("shop_id", { mode: "number" })
    .notNull()
    .references(() => shops.id),
})
