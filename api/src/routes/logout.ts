import { Request, Response } from "express"

export async function logoutHandler(req: Request, res: Response) {
  req.session.destroy(() => {
    res.status(200).json({ status: "logged out" })
  })
}
