import express from "express"

import { setupMiddleware } from "./middleware"
import { restrict } from "./middleware/restrict"

import { loginHandler } from "./routes/login"
import { metabaseAuthHandler } from "./routes/metabase-sso"
import { productListHandler } from "./routes/product-list"
import { productDetailHandler } from "./routes/product-detail"

import { PORT } from "./constants/env"

const app = express()
setupMiddleware(app)

app.get("/", (_, res) => res.send({ status: "ready" }))
app.post("/login", loginHandler)
app.get("/sso/metabase", metabaseAuthHandler)
app.get("/products", productListHandler)
app.get("/product/:id", productDetailHandler)

app.get("/user", restrict, (req: any, res: any) => {
  res.status(200).json({ user: req.session.user })
})

app.listen(PORT, () => {
  console.log(`[customer zero api] running at http://localhost:${PORT}`)
})
