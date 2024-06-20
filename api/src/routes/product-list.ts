import { Request, Response } from "express"

import { db } from "../utils/db"
import { findUserByEmail } from "../auth/authenticate"

export async function productListHandler(req: Request, res: Response) {
  // user is guaranteed to be defined by the restrict middleware
  const user = findUserByEmail(req.session.user!.email)

  if (!user?.shopId) {
    return res.status(400).json({ error: "user has no assigned shop" })
  }

  try {
    const products = await db.query.products.findMany({
      columns: {
        id: true,
        title: true,
        createdAt: true,
        imageUrl: true,
      },
      with: { category: { columns: { id: true, name: true } } },
      where: (products, { eq }) => eq(products.shopId, user.shopId),
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
