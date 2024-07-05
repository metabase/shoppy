import { useAtom } from "jotai"

import { themeAtom } from "../store/theme"

export function FontLoader() {
  const [theme] = useAtom(themeAtom)

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
