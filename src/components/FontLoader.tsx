import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

export function FontLoader() {
  const [site] = useAtom(siteAtom)

  return (
    <link type="text/css" rel="stylesheet" href={`/fonts/${site}.font.css`} />
  )
}
