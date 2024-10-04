import { atomWithStorage } from "jotai/utils"

import type { SiteKey } from "../types/site"

export const SITE_KEY = "site"
export const DEFAULT_SITE: SiteKey = "stitch"

export const siteAtom = atomWithStorage<SiteKey>(SITE_KEY, DEFAULT_SITE)
