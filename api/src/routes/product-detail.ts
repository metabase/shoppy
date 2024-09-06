import { Request, Response } from "express"

import { db } from "../utils/db"

export async function productDetailHandler(req: Request, res: Response) {
  const productId = req.params.id

  if (!productId) {
    return res.status(400).json({ error: "missing product id" })
  }

  try {
    const product = await db.query.products.findFirst({
      where: (products, { eq }) => eq(products.id, parseInt(productId, 10)),
      columns: {
        id: true,
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
