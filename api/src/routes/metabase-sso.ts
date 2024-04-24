import { Request, Response } from "express"
import { signUserToken } from "../auth/sign"
import { METABASE_INSTANCE_URL } from "../constants/env"
import { SSO_NOT_CONFIGURED_MESSAGE } from "../constants/errors"

export async function metabaseAuthHandler(req: Request, res: Response) {
  const { user } = req.session

  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "not authenticated",
    })
  }

  const ssoUrl = new URL("/auth/sso", METABASE_INSTANCE_URL)
  ssoUrl.searchParams.set("jwt", signUserToken(user))
  ssoUrl.searchParams.set("token", "true")

  try {
    const response = await fetch(ssoUrl, {
      method: "GET",
      credentials: "include",
    })

    const text = await response.text()

    if (text.includes(`SSO has not been enabled`)) {
      return res.status(500).json({
        status: "error",
        message: SSO_NOT_CONFIGURED_MESSAGE,
      })
    }

    const token = JSON.parse(text)

    return res.status(200).json(token)
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({
        status: "error",
        message: "authentication failed",
        error: error.message,
      })
    }
  }
}
