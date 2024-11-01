import { useAtom } from "jotai"
import { useEffect, useRef } from "react"

import { siteAtom, siteIsReloadingAtom } from "../store/site"

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

export function useReloadOnSiteChange() {
  const [, setSiteIsReloading] = useAtom(siteIsReloadingAtom)

  useSiteChanged(() => {
    // reloading takes a few milliseconds,
    // so we can trigger the full-screen loader first.
    setSiteIsReloading(true)

    window.location.reload()
  })
}
