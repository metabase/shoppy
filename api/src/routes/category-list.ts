import { Request, Response } from "express"

import { db } from "../utils/db"
import { findUserByEmail } from "../auth/authenticate"

export async function categoryListHandler(req: Request, res: Response) {
  // user is guaranteed to be defined by the restrict middleware
  const user = findUserByEmail(req.session.user!.email)

  if (!user?.shopId) {
    return res.status(400).json({ error: "user has no assigned shop" })
  }

  try {
    const categories = await db.query.productCategories.findMany({
      columns: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
      },
      where: (category, { eq }) => eq(category.shopId, user.shopId),
    })

    res.status(200).json({ categories })
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "failed to query categories", reason: error.message })
    }
  }
}
