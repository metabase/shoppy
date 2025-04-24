import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { productCategories } from "../../src/schema/product-categories"

type ProductsCategoriesInput = typeof productCategories.$inferInsert

const productCategoriesData = [
  {
    id: 1,
    shopId: 1,
    name: "Food and Treats",
    description:
      "Pet foods, treats, and specialty diets for different types of pets",
  },
  {
    id: 2,
    shopId: 1,
    name: "Care and Grooming",
    description:
      "Products such as shampoos, brushes, nail clippers, and grooming tools for maintaining the health and appearance of pets",
  },
  {
    id: 3,
    shopId: 1,
    name: "Toys",
    description:
      "A variety of toys designed for dogs, cats, birds, and other pets to keep them entertained and stimulated",
  },
  {
    id: 4,
    shopId: 1,
    name: "Beds and Furniture",
    description:
      "Comfortable and stylish beds, sofas, and furniture for pets to rest and relax",
  },
  {
    id: 5,
    shopId: 2,
    name: "Punderful Prints",
    description: "T-shirts with puns, wordplay, and clever linguistic designs",
  },
  {
    id: 6,
    shopId: 2,
    name: "Pixel <3",
    description:
      "T-shirts inspired by retro pixel art, video games, and 8-bit nostalgia",
  },
  {
    id: 7,
    shopId: 2,
    name: "Adventure",
    description: "T-shirts inspired by adventure and exploration",
  },
  {
    id: 8,
    shopId: 2,
    name: "Dystopian Dreams",
    description:
      "T-shirts that delve into the speculative and often unsettling visions of possible futures",
  },
  {
    id: 9,
    shopId: 3,
    name: "Skincare",
    description: "Cleansers, moisturizers, serums, and sunscreen",
  },
  {
    id: 10,
    shopId: 3,
    name: "Hair Care",
    description:
      "Shampoos, conditioners, styling products, and hair treatments",
  },
  {
    id: 11,
    shopId: 3,
    name: "Makeup",
    description:
      "Cosmetics including foundation, lipstick, eyeshadow, mascara, and other makeup products",
  },
  {
    id: 12,
    shopId: 3,
    name: "Bath and Body",
    description:
      "Bath salts, shower gels, body lotions, and spa-related products",
  },
  {
    id: 13,
    shopId: 3,
    name: "Sun Care",
    description:
      "Sunscreen, after-sun care, and other products for sun protection",
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
