import { ThemeConfig, ThemeInfo, ThemeKey } from "../types/theme"
import { DarkTheme } from "./dark"
import { LightTheme } from "./light"
import { BlueTheme } from "./blue"

export const THEMES: ThemeInfo[] = [
  { title: "Site 1", key: "dark", icon: "iconoir:shirt" },
  { title: "Site 2", key: "light", icon: "streamline:lipstick" },
  { title: "Site 3", key: "blue", icon: "lucide:dog" },
]

export const THEME_CONFIG_MAP: Record<ThemeKey, ThemeConfig> = {
  dark: DarkTheme,
  light: LightTheme,
  blue: BlueTheme,
}
