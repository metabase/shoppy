import { Request, Response } from "express"

import { signUserToken } from "../auth/sign"
import { NO_USER_MESSAGE } from "../constants/errors"
import { getUserBySite } from "../utils/sites"

export async function metabaseAuthHandler(req: Request, res: Response) {
  const { site } = req.query

  if (typeof site !== "string") {
    return res.status(400).json({ error: "site is not specified" })
  }

  const user = await getUserBySite(site)

  if (!user) {
    return res.status(401).json({ status: "error", message: NO_USER_MESSAGE })
  }

  try {
    return res.status(200).json({ jwt: signUserToken(user) })
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({
        status: "error",
        message: "sso authentication failed",
        error: error.message,
      })
    }
  }
}
