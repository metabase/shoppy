import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { productCategories } from "../../src/schema/product-categories"

type ProductsCategoriesInput = typeof productCategories.$inferInsert

const productCategoriesData = [
  {
    id: 1,
    shopId: 1,
    name: "Hats",
    description: "Hats and berets for the most dapper of pugs",
  },
  {
    id: 2,
    shopId: 1,
    name: "Hoodies",
    description: "Cozy hoodies to keep your pug snug and stylish",
  },
  {
    id: 3,
    shopId: 1,
    name: "Shirts",
    description: "Shirts, jackets, sweaters and more for fashion-forward pugs",
  },
  {
    id: 5,
    shopId: 2,
    name: "White",
    description: "Clean white tees with glitchy digital prints",
  },
  {
    id: 6,
    shopId: 2,
    name: "Black",
    description: "Black tees with bold glitchy digital designs",
  },
  {
    id: 7,
    shopId: 2,
    name: "All-Over Print",
    description: "Full coverage glitchy digital all-over print tees",
  },
  {
    id: 9,
    shopId: 3,
    name: "Creams",
    description: "Face creams and gels for every skin need",
  },
  {
    id: 10,
    shopId: 3,
    name: "Serums",
    description: "Targeted serums for radiant, healthy skin",
  },
  {
    id: 11,
    shopId: 3,
    name: "Make-up",
    description: "Makeup and cosmetics for every look",
  },
  {
    id: 14,
    shopId: 4,
    name: "Leadership Training",
    description: "Executive and management leadership development programs",
  },
  {
    id: 15,
    shopId: 4,
    name: "Technical Skills",
    description: "Technical and software development training",
  },
  {
    id: 16,
    shopId: 4,
    name: "Soft Skills",
    description: "Interpersonal and communication skills development",
  },
  {
    id: 17,
    shopId: 4,
    name: "Compliance",
    description: "Regulatory and compliance training programs",
  },
  {
    id: 18,
    shopId: 4,
    name: "Health & Wellness",
    description: "Professional health and wellness education",
  },
  {
    id: 19,
    shopId: 4,
    name: "Marketing",
    description: "Marketing and business development training",
  },
]

/**
 * Generates more mock product categories for the database.
 */
export async function generateProductCategories() {
  console.log("Generating product categories...")

  const dataWithTimestamps: ProductsCategoriesInput[] =
    productCategoriesData.map((entry) => {
      const createdAtDate =
        Math.random() > 0.5
          ? faker.date.past({ years: 4 })
          : faker.date.recent({ days: 90 })

      const createdAt = createdAtDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")

      return {
        ...entry,
        createdAt,
      }
    })

  await db.insert(productCategories).values(dataWithTimestamps)

  console.log(`✅ Inserted ${dataWithTimestamps.length} product categories`)
}
