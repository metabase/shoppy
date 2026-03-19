import cors from "cors"
import express, { Router } from "express"
import session from "express-session"

import { FRONTEND_URL, SESSION_SECRET, VERCEL_ENV } from "../constants/env"

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
  router.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: !!VERCEL_ENV,
        sameSite: VERCEL_ENV ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    }),
  )
}
