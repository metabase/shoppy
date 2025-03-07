import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { shops } from "../../src/schema/shops"

type ShopsInput = typeof shops.$inferInsert

export const shopsData = [
  {
    id: 1,
    alias: "pug",
    name: "Pug & Play",
    imagesCount: 3,
  },
  {
    id: 2,
    alias: "luminara",
    name: "Luminara Beauty",
    imagesCount: 2,
  },
  {
    id: 3,
    alias: "stitch",
    name: "theStitch",
    imagesCount: 3,
  },
  {
    id: 4,
    alias: "proficiency",
    name: "Acme Co",
    imagesCount: 14,
  },
]

/**
 * Generates more mock shops for the database.
 */
export async function generateShops() {
  console.log("generating shops...")

  for (let i = 0; i < shopsData.length; i++) {
    const shopData = shopsData[i]

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    const shop: ShopsInput = {
      id: shopData.id,
      name: shopData.name,
      description: "",
      createdAt,
    }

    await db.insert(shops).values(shop)

    console.log(`generated shop for ${createdAt.toString()}`)
  }
}
