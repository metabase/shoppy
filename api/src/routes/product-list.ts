import { Request, Response } from "express"

import { db } from "../utils/db"

export async function productListHandler(req: Request, res: Response) {
  try {
    const products = await db.query.products.findMany({
      columns: {
        id: true,
        title: true,
        createdAt: true,
        imageUrl: true,
      },
      with: { category: { columns: { name: true } } },
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
