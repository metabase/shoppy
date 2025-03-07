import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { products } from "../../src/schema/products"
import { shopsData } from "./generate-shops"
import { getRandomEntityToLink } from "./helpers/get-random-entity-to-link"

const PRODUCTS_COUNT = 75

type ProductsInput = typeof products.$inferInsert

/**
 * Generates more mock products for the database.
 */
export async function generateProducts() {
  console.log("generating products...")

  const shops = await db.query.shops.findMany({
    columns: { id: true, name: true },
  })

  const categories = await db.query.productCategories.findMany({
    columns: { id: true, shopId: true },
  })

  for (let i = 0; i < PRODUCTS_COUNT; i++) {
    const category = getRandomEntityToLink({
      primaryEntityIndex: i,
      entitiesToLink: categories,
    })
    const categoryId = category.id

    const shopId = category.shopId
    const shop = shops.find((shop) => shop.id === shopId)

    if (!shop) {
      continue
    }

    const shopData = shopsData[shopId - 1]
    const imageId = Math.floor(Math.random() * shopData.imagesCount) + 1
    const imageUrl = `/images/${shopData.alias}/${imageId}.png`

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    const product: ProductsInput = {
      id: i,
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      categoryId,
      discount: faker.number.int({ min: 0, max: 30 }).toString(),
      imageUrl,
      shopId,
      createdAt,
    }

    await db.insert(products).values(product)

    console.log(`generated product for ${createdAt.toString()}`)
  }
}
