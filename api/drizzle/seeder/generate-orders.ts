import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { orders } from "../../src/schema/orders"
import { getRandomEntity } from "./helpers/get-random-entity"
import { getNormalizedOrdersCount } from "./helpers/get-normalized-orders-count"

const ORDER_COUNT = getNormalizedOrdersCount(1620)

type OrderInput = typeof orders.$inferInsert

/**
 * Generates more mock orders for the database.
 */
export async function generateOrders() {
  console.log("Generating orders...")

  const products = await db.query.products.findMany({
    columns: { id: true, price: true },
  })

  const customers = await db.query.people.findMany({
    columns: { id: true, name: true },
  })

  if (products.length === 0 || customers.length === 0) {
    console.warn("⚠️ Cannot generate orders — no products or customers found")
    return
  }

  const ordersBatch: OrderInput[] = []

  for (let i = 0; i < ORDER_COUNT; i++) {
    const product = getRandomEntity(products)
    const customer = getRandomEntity(customers)

    if (!product || !customer) continue

    const basePrice = parseFloat(product.price)
    const discount =
      Math.random() > 0.7
        ? faker.number.int({ min: 0, max: Math.floor(basePrice / 2) })
        : 0

    const totalPrice = Math.max(basePrice - discount, 0)

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    ordersBatch.push({
      id: i,
      createdAt,
      productId: product.id,
      quantity: faker.number.int({ min: 1, max: 10 }).toString(),
      totalPrice: totalPrice.toFixed(2),
      discountApplied: discount.toString(),
      customerId: customer.id,
    })
  }

  await db.insert(orders).values(ordersBatch)

  console.log(`✅ Inserted ${ordersBatch.length} orders`)
}
