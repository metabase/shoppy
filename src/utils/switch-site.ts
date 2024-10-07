import Cookies from "js-cookie"

import { queryClient } from "./query-client"

import { SiteKey } from "../types/site"
import { DEFAULT_SITE, SITE_KEY, siteAtom } from "../store/site"

import { store } from "../store"

export const COOKIE_USER_KEY = "user"

const SITE_TO_EMAIL_MAP: Record<SiteKey, string> = {
  stitch: "cecilia@example.com",
  luminara: "emily@example.com",
  pug: "rene@example.com",
}

export const setSiteCookie = (site: SiteKey) =>
  Cookies.set(COOKIE_USER_KEY, SITE_TO_EMAIL_MAP[site])

/** Set the initial site if the demo is visited for the first time. */
export function setInitialSiteCookie() {
  if (!Cookies.get(COOKIE_USER_KEY)) {
    // Use the site from localStorage as the initial site.
    // This is a migration for people who have previously visited the demo.
    const site = JSON.parse(localStorage.getItem(SITE_KEY)!) || DEFAULT_SITE

    setSiteCookie(site as SiteKey)
  }
}

export async function switchSite(site: SiteKey) {
  setSiteCookie(site)

  const hasSiteChanged = site !== store.get(siteAtom)

  if (hasSiteChanged) {
    await queryClient.refetchQueries({
      predicate: (query) =>
        ["products", "categories"].includes(query.queryKey.toString()),
    })
  }
}
