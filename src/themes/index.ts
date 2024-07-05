import { StitchTheme } from "./stitch"
import { LuminaraTheme } from "./luminara"
import { PugTheme } from "./pug"

import type { SiteConfig, SiteInfo, SiteKey } from "../types/site"

export const THEMES: SiteInfo[] = [
  { title: "Site 1", key: "stitch", icon: "iconoir:shirt" },
  { title: "Site 2", key: "luminara", icon: "streamline:lipstick" },
  { title: "Site 3", key: "pug", icon: "lucide:dog" },
]

export const THEME_CONFIG_MAP: Record<SiteKey, SiteConfig> = {
  stitch: StitchTheme,
  luminara: LuminaraTheme,
  pug: PugTheme,
}
