import { eq } from "drizzle-orm"

import { db } from "../../src/utils/db"
import { products as productSchema } from "../../src/schema/products"
import { people as peopleSchema } from "../../src/schema/people"
import { orders as orderSchema } from "../../src/schema/orders"

/**
 * Assign shop_id to customers based on their purchased product.
 */
export async function assignShopsToCustomers() {
  const customers = await db.query.people.findMany({
    columns: { id: true },
  })

  for (const customer of customers) {
    const orders = await db.query.orders.findMany({
      columns: { id: true, productId: true },
      where: eq(orderSchema.customerId, customer.id),
    })

    for (const order of orders) {
      if (!order.productId) continue

      const product = await db.query.products.findFirst({
        columns: { id: true, shopId: true },
        where: eq(productSchema.id, order.productId),
      })

      if (product) {
        await db
          .update(peopleSchema)
          .set({ shopId: product.shopId })
          .where(eq(peopleSchema.id, customer.id))
          .returning()
      }
    }
  }
}
