import { Request, Response, NextFunction } from "express"

/**
 * Cache-Control header tells the browser to cache it for a week,
 * and Vercel's Edge CDN caches it via https://vercel.com/docs/edge-network/caching
 */
export function withCacheHeader(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  res.set({
    "Cache-Control": "public, max-age=604800, stale-while-revalidate=604800",
    "CDN-Cache-Control": "public, max-age=2592000",
  })

  next()
}
