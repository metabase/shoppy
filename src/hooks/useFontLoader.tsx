import { useAtom } from "jotai"

import { $theme } from "../store/theme"

export function FontLoader() {
  const [theme] = useAtom($theme)

  return (
    <div>
      <link
        type="text/css"
        rel="stylesheet"
        href={`/fonts/${theme}.font.css`}
      />
    </div>
  )
}
