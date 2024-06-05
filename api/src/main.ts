import express, { Router } from "express"

import { setupMiddleware } from "./middleware"
import { restrict } from "./middleware/restrict"

import { loginHandler } from "./routes/login"
import { logoutHandler } from "./routes/logout"
import { metabaseAuthHandler } from "./routes/metabase-sso"
import { productListHandler } from "./routes/product-list"
import { productDetailHandler } from "./routes/product-detail"

import { PORT } from "./constants/env"
import { pg } from "./utils/db"

const app = express()
setupMiddleware(app)

const router = Router()
router.get("/", (_, res) => res.send({ status: "ok" }))
router.post("/login", loginHandler)
router.post("/logout", logoutHandler)
router.get("/sso/metabase", metabaseAuthHandler)
router.get("/products", productListHandler)
router.get("/product/:id", productDetailHandler)
router.get("/user", restrict, (req: any, res: any) => {
  res.status(200).json({ user: req.session.user })
})

app.get("/", (_, res) => res.send({ status: "ok" }))
app.use("/api", router)
app.listen(PORT, async () => {
  console.log(`[shoppy api] running at http://localhost:${PORT}`)

  await pg.connect()
})

export default app
