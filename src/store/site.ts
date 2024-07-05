import { atomWithStorage } from "jotai/utils"

import type { SiteKey } from "../types/site"

export const siteAtom = atomWithStorage<SiteKey>("site", "stitch")
