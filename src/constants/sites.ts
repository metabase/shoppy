import { ProficiencySite } from "../themes/proficiency"
import { StitchSite } from "../themes/stitch"
import { LuminaraSite } from "../themes/luminara"
import { PugSite } from "../themes/pug"

import type { SiteConfig, SiteInfo, SiteKey } from "../types/site"

export const SITES: SiteInfo[] = [
  { key: "proficiency", icon: "iconoir:apple-imac-2021", shopId: 4 },
  { key: "stitch", icon: "iconoir:shirt", shopId: 2 },
  { key: "luminara", icon: "streamline:lipstick", shopId: 3 },
  { key: "pug", icon: "lucide:dog", shopId: 1 },
]

export const SITE_CONFIG_MAP: Record<SiteKey, SiteConfig> = {
  stitch: StitchSite,
  luminara: LuminaraSite,
  pug: PugSite,
  proficiency: ProficiencySite,
}
