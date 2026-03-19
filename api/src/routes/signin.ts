import { Request, Response } from "express"

import { getUserBySite } from "../utils/sites"
import { NO_USER_MESSAGE } from "../constants/errors"

export async function signInHandler(req: Request, res: Response) {
  const { site } = req.body

  if (typeof site !== "string") {
    return res.status(400).json({ error: "site is required" })
  }

  const user = getUserBySite(site)

  if (!user) {
    return res.status(401).json({ error: NO_USER_MESSAGE })
  }

  req.session.user = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    group: user.group,
    shopId: user.shopId,
  }

  return res.status(200).json({ ok: true })
}
