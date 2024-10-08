import { Response } from "express"

// cache for 1 week
export const cacheStaticResponse = (res: Response) =>
  res.set(
    "Cache-Control",
    "public, max-age=604800, s-maxage=604800, stale-while-revalidate=18000",
  )
