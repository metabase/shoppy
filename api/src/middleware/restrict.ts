import { Request, Response, NextFunction } from "express"

export function restrict(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) return next()

  res.status(401).json({ status: "error", message: "not authenticated" }).end()
}
