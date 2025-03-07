import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { orders } from "../../src/schema/orders"
import { getRandomEntity } from "./helpers/get-random-entity"

const ORDER_COUNT = 1620

type OrderInput = typeof orders.$inferInsert

/**
 * Generates more mock orders for the database.
 */
export async function generateOrders() {
  console.log("generating orders...")

  const products = await db.query.products.findMany({
    columns: { id: true, price: true },
  })

  const customers = await db.query.people.findMany({
    columns: { id: true, name: true },
  })

  for (let i = 0; i < ORDER_COUNT; i++) {
    const product = getRandomEntity(products)
    const productId = product.id

    const customer = getRandomEntity(customers)
    const customerId = customer.id

    if (!product) continue

    const basePrice = parseFloat(product.price)

    let discount = 0

    if (Math.random() > 0.7) {
      discount = faker.number.int({
        min: 0,
        max: Math.floor(basePrice / 2),
      })
    }

    const totalPrice = Math.max(basePrice - discount, 0)

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    const order: OrderInput = {
      id: i,
      createdAt,
      productId,
      quantity: faker.number.int({ min: 1, max: 10 }).toString(),
      totalPrice: totalPrice.toString(),
      discountApplied: discount.toString(),
      customerId,
    }

    await db.insert(orders).values(order)

    console.log(`generated order for ${createdAt.toString()}`)
  }
}
