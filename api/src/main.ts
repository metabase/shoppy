import express, { Router } from "express"

import { setupMiddleware } from "./middleware"

import { metabaseAuthHandler } from "./routes/metabase-sso"
import { productListHandler } from "./routes/product-list"
import { productDetailHandler } from "./routes/product-detail"
import { categoryListHandler } from "./routes/category-list"

import { PORT } from "./constants/env"
import { pg } from "./utils/db"

const app = express()
setupMiddleware(app)

const router = Router()
router.get("/", (_, res) => res.send({ status: "ok" }))
router.get("/sso/metabase", metabaseAuthHandler)
router.get("/products", productListHandler)
router.get("/categories", categoryListHandler)
router.get("/product/:id", productDetailHandler)

app.get("/", (_, res) => res.send({ status: "ok" }))
app.use("/api", router)
app.listen(PORT, async () => {
  console.log(`[shoppy api] running at http://localhost:${PORT}`)

  await pg.connect()
})

export default app
