import express, {Router} from "express"

import { setupMiddleware } from "./middleware"
import { restrict } from "./middleware/restrict"

import { loginHandler } from "./routes/login"
import { metabaseAuthHandler } from "./routes/metabase-sso"
import { productListHandler } from "./routes/product-list"
import { productDetailHandler } from "./routes/product-detail"

import { PORT } from "./constants/env"

const app = express()
setupMiddleware(app)

const router = Router()
router.get("/", (_, res) => res.send({ status: "ok" }))
router.post("/login", loginHandler)
router.get("/sso/metabase", metabaseAuthHandler)
router.get("/products", productListHandler)
router.get("/product/:id", productDetailHandler)
router.get("/user", restrict, (req: any, res: any) => {
  res.status(200).json({ user: req.session.user })
})

app.get("/", (_, res) => res.send({ status: "ok" }))
app.use("/api", router)
app.listen(PORT, () => {
  console.log(`[customer zero api] running at http://localhost:${PORT}`)
})
