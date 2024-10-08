import { Response } from "express"

// cache for 1 week.
// this cache-control header tells the browser to cache it for a week,
// as well as tells Vercel's Edge CDN to cache via https://vercel.com/docs/edge-network/caching
export const cacheStaticResponse = (res: Response) =>
  res.set(
    "Cache-Control",
    "public, max-age=604800, s-maxage=604800, stale-while-revalidate=18000",
  )
