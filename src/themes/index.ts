import { StitchSite } from "./stitch"
import { LuminaraSite } from "./luminara"
import { PugSite } from "./pug"

import type { SiteConfig, SiteInfo, SiteKey } from "../types/site"

export const SITES: SiteInfo[] = [
  { title: "Site 1", key: "stitch", icon: "iconoir:shirt" },
  { title: "Site 2", key: "luminara", icon: "streamline:lipstick" },
  { title: "Site 3", key: "pug", icon: "lucide:dog" },
]

export const SITE_CONFIG_MAP: Record<SiteKey, SiteConfig> = {
  stitch: StitchSite,
  luminara: LuminaraSite,
  pug: PugSite,
}
