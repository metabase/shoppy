import cors from "cors"
import express, { Express } from "express"
import session from "express-session"
import pgSessionStore from "connect-pg-simple"

import {
  FRONTEND_URL,
  SESSION_SECRET,
  VERCEL_URL,
  VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_BRANCH_URL,
  VERCEL_ENV,
} from "../constants/env"
import { pg } from "../utils/db"

export function setupMiddleware(app: Express) {
  const isHosted = !!VERCEL_ENV

  const SessionStore = pgSessionStore(session)

  const origin = [
    FRONTEND_URL,

    // For developing locally with the production api.
    "http://localhost:3004",
    "https://localhost:3004",

    // Add Vercel urls for each deployments.
    // Remove if you are not using Vercel to host the demo.
    VERCEL_URL,
    VERCEL_BRANCH_URL,
    VERCEL_PROJECT_PRODUCTION_URL,
  ].filter((url) => url) as string[]

  const corsMiddleware = cors({
    origin,
    credentials: true,
  })

  if (!SESSION_SECRET) {
    throw new Error("SESSION_SECRET is not set in the environment!")
  }

  const sessionMiddleware = session({
    name: "shoppy.session",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: isHosted ? { secure: true, sameSite: "none" } : { secure: "auto" },

    // Use PostgreSQL as a simple session store.
    store: new SessionStore({ pool: pg, tableName: "session" }),
  })

  app.use(express.json())
  app.use(express.text())
  app.use(express.urlencoded({ extended: false }))

  app.use(corsMiddleware)
  app.use(sessionMiddleware)

  if (isHosted) {
    app.set("trust proxy", 1)
  }
}
