import { store } from "../store"
import { siteAtom } from "../store/site"
import { SITE_CONFIG_MAP } from "../constants/sites"

import { SiteKey } from "../types/site"

const THEME_NAMES = Object.keys(SITE_CONFIG_MAP)

export function getCurrentSite(): SiteKey {
  const site = store.get(siteAtom)

  if (!site || !THEME_NAMES.includes(site)) {
    return "stitch"
  }

  return site
}
