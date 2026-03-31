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
    alias: "stitch",
    name: "theStitch",
    imagesCount: 3,
  },
  {
    id: 3,
    alias: "luminara",
    name: "Luminara Beauty",
    imagesCount: 2,
  },
  {
    id: 4,
    alias: "proficiency",
    name: "Acme Co",
    imagesCount: 14,
    images: [
      "analyst-13.png",
      "artificial-intelligence-1-95.png",
      "authentication-1-5.png",
      "coding-2-31.png",
      "coding-29.png",
      "coding-3-24.png",
      "coding-5-33.png",
      "conference-52.png",
      "coworking-31.png",
      "creative-process-11.png",
      "customer-service-71.png",
      "data-analysis-1-60.png",
      "facetime-3-68.png",
      "financial-analyst-76.png",
      "marketing-campaign-78.png",
      "meditation-15.png",
      "motivation-1-22.png",
      "motivation-7-37.png",
      "presentation-1-69.png",
      "presentation-3-28.png",
      "presentation-4-70.png",
      "problem-solving-5-71.png",
      "quality-check-57.png",
      "report-analysis-4-77.png",
      "report-analysis-5-45.png",
      "report-analysis-8.png",
      "rocket-boy-26.png",
      "salesman-100.png",
      "seo-1-33.png",
      "team-meeting-1-20.png",
      "team-presentation-1-99.png",
      "team-presentation-3-48.png",
      "team-presentation-4-68.png",
      "team-presentation-6-18.png",
      "ui-design-90.png",
      "user-interface-1-72.png",
    ],
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
