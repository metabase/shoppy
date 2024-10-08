import { Request, Response } from "express"

import { db } from "../utils/db"
import { getShopIdBySite } from "../utils/sites"

export async function categoryListHandler(req: Request, res: Response) {
  const { site } = req.query

  if (typeof site !== "string") {
    return res.status(400).json({ error: "site is not specified" })
  }

  const shopId = getShopIdBySite(site)

  if (shopId === undefined) {
    return res.status(400).json({ error: "shop not found" })
  }

  try {
    const categories = await db.query.productCategories.findMany({
      columns: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
      },
      where: (category, { eq }) => eq(category.shopId, shopId),
    })

    res.status(200).json({ categories })
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown error"

    res.status(500).json({ error: "failed to query categories", reason })
  }
}
