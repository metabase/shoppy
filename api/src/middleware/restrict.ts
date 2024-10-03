import { Request, Response, NextFunction } from "express"

import { findUserByEmail } from "../auth/authenticate"
import { NO_USER_MESSAGE } from "../constants/errors"

export function restrict(req: Request, res: Response, next: NextFunction) {
  const user = findUserByEmail(req.cookies.user)
  if (user) return next()

  res.status(401).json({ status: "error", message: NO_USER_MESSAGE }).end()
}
