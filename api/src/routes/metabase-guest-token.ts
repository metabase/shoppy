import { Request, Response } from "express"

import { signGuestToken } from "../auth/sign"

export async function guestTokenHandler(req: Request, res: Response) {
  const { type, id, ...rest } = req.query

  if (type !== "question" && type !== "dashboard") {
    return res
      .status(400)
      .json({ error: "type must be 'question' or 'dashboard'" })
  }

  if (typeof id !== "string") {
    return res.status(400).json({ error: "id is required" })
  }

  // Coerce numeric string params to numbers for Metabase locked params
  const params: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(rest)) {
    if (typeof value === "string" && value !== "" && !isNaN(Number(value))) {
      params[key] = Number(value)
    } else {
      params[key] = value
    }
  }

  try {
    const token = signGuestToken(type, isNaN(id) ? id : Number(id), params)
    return res.status(200).json({ token })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    }
  }
}
