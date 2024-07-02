import { useEffect } from "react"

import type { ThemeKey } from "../types/theme"

export function useFontLoader(theme: ThemeKey) {
  useEffect(() => {
    import(`../themes/fonts/${theme}.font.css`)
  }, [theme])
}
