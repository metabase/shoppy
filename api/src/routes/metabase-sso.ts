import { Request, Response } from "express"
import { signUserToken } from "../auth/sign"
import { METABASE_SITE_URL } from "../constants/env"

export async function metabaseAuthHandler(req: Request, res: Response) {
  const { user } = req.session

  if (!user) {
    return res.status(500).json({
      status: "error",
      message: "Not authenticated",
    })
  }

  const ssoUrl = new URL("/auth/sso", METABASE_SITE_URL)
  ssoUrl.searchParams.set("jwt", signUserToken(user))
  ssoUrl.searchParams.set("token", "true")

  try {
    const response = await fetch(ssoUrl, {
      method: "GET",
      credentials: "include",
    })

    const token = await response.json()

    return res.status(200).json(token)
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "authentication failed",
      error,
    })
  }
}
