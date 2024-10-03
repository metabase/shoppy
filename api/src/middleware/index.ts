import cors from "cors"
import express, { Express } from "express"
import session from "express-session"
import pgSessionStore from "connect-pg-simple"

import { FRONTEND_URL, SESSION_SECRET, VERCEL_ENV } from "../constants/env"
import { pg } from "../utils/db"

// Allow these origins to access the mock API server.
const isWhitelistedOrigin = (origin?: string) =>
  !origin ||
  origin.includes("localhost") ||
  origin.includes("vercel.app") ||
  origin.includes("metabase.com") ||
  origin.includes(FRONTEND_URL)

export function setupMiddleware(app: Express) {
  const isHosted = !!VERCEL_ENV

  const SessionStore = pgSessionStore(session)

  const corsMiddleware = cors({
    origin: (origin, callback) => {
      if (isWhitelistedOrigin(origin)) {
        return callback(null, true)
      }

      callback(new Error("cross-origin request not allowed"))
    },
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
