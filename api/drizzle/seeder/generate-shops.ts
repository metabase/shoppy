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
  console.log("Generating shops...")

  const shopsWithTimestamps: ShopsInput[] = shopsData.map((shop) => {
    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    return {
      id: shop.id,
      name: shop.name,
      description: "",
      createdAt,
    }
  })

  await db.insert(shops).values(shopsWithTimestamps)

  console.log(`✅ Inserted ${shopsWithTimestamps.length} shops`)
}
