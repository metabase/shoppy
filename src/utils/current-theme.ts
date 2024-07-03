import { THEME_CONFIG_MAP } from "../themes"
import { ThemeKey } from "../types/theme"

const THEME_NAMES = Object.keys(THEME_CONFIG_MAP)

export function getCurrentTheme(): ThemeKey {
  const theme = JSON.parse(localStorage.getItem("theme")!)

  if (!theme || !THEME_NAMES.includes(theme)) {
    return "stitch"
  }

  return theme
}
