import dotenv from "dotenv"
import express from "express"

import { setupMiddleware } from "./middleware"
import { restrict } from "./middleware/restrict"

import { loginHandler } from "./routes/login"
import { metabaseAuthHandler } from "./routes/metabase-sso"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3003

setupMiddleware(app)

app.get("/", (_, res) => res.send({ status: "ready" }))

app.post("/login", loginHandler)
app.get("/sso/metabase", metabaseAuthHandler)

app.get("/user", restrict, (req: any, res: any) => {
  res.status(200).json({ user: req.session.user })
})

app.listen(port, () => {
  console.log(`[customer zero api] running at http://localhost:${port}`)
})
