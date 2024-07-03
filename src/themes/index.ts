import { StitchTheme } from "./stitch"
import { LuminaraTheme } from "./luminara"
import { PugTheme } from "./pug"

import type { ThemeConfig, ThemeInfo, ThemeKey } from "../types/theme"

export const THEMES: ThemeInfo[] = [
  { title: "Site 1", key: "stitch", icon: "iconoir:shirt" },
  { title: "Site 2", key: "luminara", icon: "streamline:lipstick" },
  { title: "Site 3", key: "pug", icon: "lucide:dog" },
]

export const THEME_CONFIG_MAP: Record<ThemeKey, ThemeConfig> = {
  stitch: StitchTheme,
  luminara: LuminaraTheme,
  pug: PugTheme,
}
