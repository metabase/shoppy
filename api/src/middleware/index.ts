import cors from "cors"
import express, { Express } from "express"
import session from "express-session"

import { FRONTEND_URL, SESSION_SECRET, VERCEL_URL, VERCEL_PROJECT_PRODUCTION_URL, VERCEL_BRANCH_URL } from "../constants/env"

export function setupMiddleware(app: Express) {
  const origin = [
    FRONTEND_URL,

    // Temporary: for developing locally with the production api.
    "http://localhost:3004",

    // Add Vercel urls for each deployments.
    // Remove if you are not using Vercel to host the demo.
    VERCEL_URL,
    VERCEL_BRANCH_URL,
    VERCEL_PROJECT_PRODUCTION_URL,
  ].filter(url => url) as string[]

  const corsMiddleware = cors({
    origin,
    credentials: true,
  })

  const sessionMiddleware = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })

  app.use(express.json())
  app.use(express.text())
  app.use(express.urlencoded({ extended: false }))

  app.use(corsMiddleware)
  app.use(sessionMiddleware)
}
