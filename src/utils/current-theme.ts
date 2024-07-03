import { ThemeKey } from "../types/theme"

export function getCurrentTheme(): ThemeKey {
  const lastTheme = JSON.parse(localStorage.getItem("theme")!)

  return lastTheme ?? "dark"
}
