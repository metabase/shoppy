import { useAtom } from "jotai"
import { useEffect, useRef } from "react"

import { siteAtom } from "../store/site"

import type { SiteKey } from "../types/site"

export function useSiteChanged(onSiteChanged: () => void) {
  const [site] = useAtom(siteAtom)
  const initialSiteRef = useRef<SiteKey>()

  useEffect(() => {
    if (!initialSiteRef.current) {
      initialSiteRef.current = site
    } else if (site !== initialSiteRef.current) {
      onSiteChanged()
    }
  }, [site])
}
