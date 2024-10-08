import { Request, Response } from "express"

import { db } from "../utils/db"
import { getShopIdBySite } from "../utils/sites"

export async function productListHandler(req: Request, res: Response) {
  const { site } = req.query

  if (typeof site !== "string") {
    return res.status(400).json({ error: "site is not specified" })
  }

  const shopId = getShopIdBySite(site)

  if (shopId === undefined) {
    return res.status(400).json({ error: "shop not found" })
  }

  try {
    const products = await db.query.products.findMany({
      columns: {
        id: true,
        title: true,
        createdAt: true,
        imageUrl: true,
        shopId: true,
      },
      with: { category: { columns: { id: true, name: true } } },
      where: (products, { eq }) => eq(products.shopId, shopId),
    })

    res.status(200).json({ products })
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "failed to query products", reason: error.message })
    }
  }
}
