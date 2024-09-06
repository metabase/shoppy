import { eq } from "drizzle-orm"

import { db } from "../../src/utils/db"
import { products as productSchema } from "../../src/schema/products"

const SHOPS = ["pug", "stitch", "luminara"]

/**
 * Assign images to products based on their shops category.
 */
export async function assignImagesToProducts() {
  const products = await db.query.products.findMany({
    columns: { id: true, shopId: true, imageUrl: true },
  })

  for (const product of products) {
    const shop = SHOPS[product.shopId - 1]
    const numImages = shop === "luminara" ? 2 : 3
    const imageId = Math.floor(Math.random() * numImages) + 1

    const imageUrl = `/images/${shop}/${imageId}.png`

    await db
      .update(productSchema)
      .set({ imageUrl })
      .where(eq(productSchema.id, product.id))
      .returning()
  }
}
