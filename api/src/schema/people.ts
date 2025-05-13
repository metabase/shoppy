import { pgTable, date, timestamp, bigint, text } from "drizzle-orm/pg-core"
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
  birthDate: date("birth_date"),
  zip: text("zip"),
  latitude: text("latitude"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
  shopId: bigint("shop_id", { mode: "number" })
    .notNull()
    .references(() => shops.id),
})
