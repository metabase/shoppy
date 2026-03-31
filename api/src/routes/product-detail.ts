import { Request, Response } from "express"

import { db } from "../utils/db"
import { HARDCODED_PROFICIENCY_PRODUCTS } from "../utils/hardcoded-proficiency-products"

export async function productDetailHandler(req: Request, res: Response) {
  const productId = req.params.id

  if (!productId) {
    return res.status(400).json({ error: "missing product id" })
  }

  try {
    const productIdNum = parseInt(productId, 10)

    // Check hardcoded proficiency products first
    const hardcodedProduct = HARDCODED_PROFICIENCY_PRODUCTS.find(
      (p) => p.id === productIdNum
    )

    if (hardcodedProduct) {
      return res.status(200).json({
        product: {
          id: hardcodedProduct.id,
          description: hardcodedProduct.description,
          title: hardcodedProduct.title,
          imageUrl: hardcodedProduct.imageUrl,
          shopId: hardcodedProduct.shopId,
          category: { name: hardcodedProduct.category.name },
        },
      })
    }

    // Fall back to database for other shops
    const product = await db.query.products.findFirst({
      where: (products, { eq }) => eq(products.id, productIdNum),
      columns: {
        id: true,
        description: true,
        title: true,
        createdAt: true,
        imageUrl: true,
        shopId: true,
      },
      with: { category: { columns: { name: true } } },
    })

    res.status(200).json({ product })
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "failed to query products", reason: error.message })
    }
  }
}
