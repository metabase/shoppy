import { SITE_CONFIG_MAP } from "../themes"

import { SiteKey } from "../types/site"

const THEME_NAMES = Object.keys(SITE_CONFIG_MAP)

export function getCurrentSite(): SiteKey {
  const site = JSON.parse(localStorage.getItem("site")!)

  if (!site || !THEME_NAMES.includes(site)) {
    return "stitch"
  }

  return site
}
