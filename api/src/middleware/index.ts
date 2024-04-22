import cors from "cors"
import express, { Express } from "express"
import session from "express-session"

import { FRONTEND_URL, SESSION_SECRET } from "../constants/env"

export function setupMiddleware(app: Express) {
  const corsMiddleware = cors({
    origin: FRONTEND_URL,
    credentials: true,
  })

  const sessionMiddleware = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })

  app.use(corsMiddleware)
  app.use(express.json())
  app.use(express.text())
  app.use(express.urlencoded({ extended: false }))

  app.use(sessionMiddleware)
}
