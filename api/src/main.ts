import express, { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

import { setupMiddleware } from "./middleware"
import { withCacheHeader } from "./middleware/cache"

import { metabaseAuthHandler } from "./routes/metabase-sso"
import { productListHandler } from "./routes/product-list"
import { productDetailHandler } from "./routes/product-detail"
import { categoryListHandler } from "./routes/category-list"

import { METABASE_INSTANCE_URL, PORT, VERCEL_ENV } from "./constants/env"
import { pg } from "./utils/db"

const app = express()
const isHosted = !!VERCEL_ENV
if (isHosted) {
  app.set("trust proxy", 1)
}

const router = Router()
setupMiddleware(router)

router.get("/", (_, res) => res.send({ status: "ok" }))
router.get("/sso/metabase", metabaseAuthHandler)
router.get("/products", withCacheHeader, productListHandler)
router.get("/categories", withCacheHeader, categoryListHandler)
router.get("/product/:id", withCacheHeader, productDetailHandler)

app.get("/", (_, res) => res.send({ status: "ok" }))
app.use("/api", router)

/**
 * Only used in Cypress, because we call <clientUrl>/mb on production build. But Vercel has it's own routing via vercel.json
 *
 * And we call Metabase URL directly locally, to avoid same-site requests sending "metabase.SESSION" cookie that takes
 * precedence over "X-Metabase-Session" header.
 */
app.use(
  "/mb",
  createProxyMiddleware({
    target: METABASE_INSTANCE_URL,
    changeOrigin: true,
    pathRewrite: { "^/mb": "" },
  }),
)

app.listen(PORT, async () => {
  console.log(`[shoppy api] running at http://localhost:${PORT}`)

  await pg.connect()
})

export default app
