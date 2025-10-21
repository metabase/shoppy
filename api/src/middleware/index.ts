import cors from "cors"
import express, { Router } from "express"

import { FRONTEND_URL } from "../constants/env"

// Allow these origins to access the mock API server.
const isWhitelistedOrigin = (origin: string) =>
  origin.includes("localhost") ||
  origin.includes("vercel.app") ||
  origin.includes("metabase.com") ||
  origin.includes(FRONTEND_URL)

export function setupMiddleware(router: Router) {
  const corsMiddleware = cors({
    origin: (origin, callback) => {
      // Return the CORS header if the origin is defined in header and whitelisted.
      callback(null, origin && isWhitelistedOrigin(origin))
    },
    credentials: true,
  })

  router.use(express.json())
  router.use(express.text())
  router.use(express.urlencoded({ extended: false }))
  router.use(corsMiddleware)
}
