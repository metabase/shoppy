import { useAtom } from "jotai"

import { siteAtom } from "../store/theme"

export function FontLoader() {
  const [theme] = useAtom(siteAtom)

  return (
    <link type="text/css" rel="stylesheet" href={`/fonts/${theme}.font.css`} />
  )
}
