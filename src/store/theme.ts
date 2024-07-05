import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { SiteKey } from "../types/site"

export const themeAtom = atomWithStorage<SiteKey>("theme", "stitch")
