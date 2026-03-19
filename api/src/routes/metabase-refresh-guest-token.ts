import { Request, Response } from "express"

import { signGuestToken } from "../auth/sign"

export async function refreshGuestTokenHandler(req: Request, res: Response) {
  const { entityType, entityId, customContext } = req.body

  if (entityType !== "question" && entityType !== "dashboard") {
    return res
      .status(400)
      .json({ error: "entityType must be 'question' or 'dashboard'" })
  }

  if (entityId == null) {
    return res.status(400).json({ error: "entityId is required" })
  }

  const currentUser = req.session.user

  console.log(currentUser)
  // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️️ we check the permissions here
  if (currentUser?.shopId !== 1) {
    // don't allow Shop 1-3 (not Pug & Play) to refresh tokens
    return res
      .status(403)
      .json({ error: "Unauthorized to refresh guest token for this resource" })
  }
  try {
    const token = signGuestToken({
      resourceType: entityType,
      resourceId: entityId,
    })
    return res.status(200).json({ jwt: token })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    }
  }
}
