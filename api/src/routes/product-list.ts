import { Request, Response } from "express"

import { db } from "../utils/db"
import { getShopIdBySite } from "../utils/sites"
import { HARDCODED_PROFICIENCY_PRODUCTS } from "../utils/hardcoded-proficiency-products"

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
    let products

    // Use hardcoded products for proficiency (shopId: 4)
    if (shopId === 4) {
      products = HARDCODED_PROFICIENCY_PRODUCTS
    } else {
      // Query from database for other shops
      products = await db.query.products.findMany({
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
    }

    res.status(200).json({ products })
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "failed to query products", reason: error.message })
    }
  }
}
