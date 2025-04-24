import { and, eq, isNotNull, sql } from "drizzle-orm"
import { db } from "../../src/utils/db"
import { orders } from "../../src/schema/orders"
import { products } from "../../src/schema/products"

/**
 * Assign shop_id to customers based on their purchased product (batch update).
 */
export async function assignShopsToCustomers() {
  console.log("Assigning shopId to customers (batch update) using CASE...")

  const mappings = await db
    .selectDistinct({
      customerId: orders.customerId,
      shopId: products.shopId,
    })
    .from(orders)
    .innerJoin(products, eq(orders.productId, products.id))
    .where(and(isNotNull(orders.productId), isNotNull(products.shopId)))

  if (mappings.length === 0) {
    console.log("No customer-shop mappings found.")
    return
  }

  const caseClauses = mappings.map(
    ({ customerId, shopId }) =>
      sql`
        WHEN people.id = ${sql.param(customerId)}
        THEN ${sql.param(shopId)}::bigint
      `,
  )

  const customerIdParams = mappings.map(({ customerId }) =>
    sql.param(customerId),
  )

  const updateQuery = sql`
      UPDATE ${sql.identifier("people")} AS people
      SET shop_id = CASE
        ${sql.join(caseClauses, sql` `)}
        ELSE people.shop_id
        END
      WHERE people.id IN (${sql.join(customerIdParams, sql`,`)})
  `

  await db.execute(updateQuery)
  console.log(
    `✅ Batch updated ${mappings.length} customer(s) with shopId using CASE.`,
  )
}
