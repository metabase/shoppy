import { useAtom } from "jotai"

import { $theme } from "../store/theme"

// import("../themes/fonts/blue.font.css")
// import("../themes/fonts/light.font.css")
// import("../themes/fonts/dark.font.css")

export function FontLoader() {
  const [themeKey] = useAtom($theme)

  return (
    <div>
      {themeKey === "dark" && (
        <link type="text/css" rel="stylesheet" href="/fonts/dark.font.css" />
      )}

      {themeKey === "light" && (
        <link type="text/css" rel="stylesheet" href="/fonts/light.font.css" />
      )}

      {themeKey === "blue" && (
        <link type="text/css" rel="stylesheet" href="/fonts/blue.font.css" />
      )}
    </div>
  )
}
