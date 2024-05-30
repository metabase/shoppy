import { Request, Response } from "express"

import { authenticate } from "../auth/authenticate"
import { LOGIN_FAILED_MESSAGE } from "../constants/errors"

export async function loginHandler(req: Request, res: Response) {
  const user = await authenticate(req.body.email, req.body.password)

  if (!user) {
    return res.status(401).json({
      status: "error",
      message: LOGIN_FAILED_MESSAGE,
    })
  }

  req.session.regenerate(() => {
    req.session.user = user

    console.log(`[/login]: ${req.body.email} (${req.sessionID}):`, req.session)

    res.status(200).json({ status: "success" })
  })
}
