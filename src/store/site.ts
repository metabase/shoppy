import { atomWithStorage, createJSONStorage } from "jotai/utils"

import type { SiteKey } from "../types/site"
import { atom } from "jotai"

export const SITE_KEY = "site"
export const DEFAULT_SITE: SiteKey = "acme"

export const siteAtom = atomWithStorage<SiteKey>(
  SITE_KEY,
  DEFAULT_SITE,
  createJSONStorage(),
  {
    getOnInit: true,
  },
)

export const siteIsReloadingAtom = atom(false)
