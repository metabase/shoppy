import cors from "cors"
import express, { Express } from "express"
import cookieParser from "cookie-parser"

import { FRONTEND_URL, VERCEL_ENV } from "../constants/env"

// Allow these origins to access the mock API server.
const isWhitelistedOrigin = (origin?: string) =>
  !origin ||
  origin.includes("localhost") ||
  origin.includes("vercel.app") ||
  origin.includes("metabase.com") ||
  origin.includes(FRONTEND_URL)

export function setupMiddleware(app: Express) {
  const isHosted = !!VERCEL_ENV

  const corsMiddleware = cors({
    origin: (origin, callback) => {
      if (isWhitelistedOrigin(origin)) {
        return callback(null, true)
      }


      callback(new Error("cross-origin request not allowed"))
    },
    credentials: true,
  })

  app.use(express.json())
  app.use(express.text())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.use(corsMiddleware)

  if (isHosted) {
    app.set("trust proxy", 1)
  }
}
