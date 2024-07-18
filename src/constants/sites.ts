import { StitchSite } from "../themes/stitch"
import { LuminaraSite } from "../themes/luminara"
import { PugSite } from "../themes/pug"

import type { SiteConfig, SiteInfo, SiteKey } from "../types/site"

export const SITES: SiteInfo[] = [
  { title: "Shop 1", key: "stitch", icon: "iconoir:shirt" },
  { title: "Shop 2", key: "luminara", icon: "streamline:lipstick" },
  { title: "Shop 3", key: "pug", icon: "lucide:dog" },
]

export const SITE_CONFIG_MAP: Record<SiteKey, SiteConfig> = {
  stitch: StitchSite,
  luminara: LuminaraSite,
  pug: PugSite,
}
