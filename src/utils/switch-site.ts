import { setCookie } from "./set-cookie"

import { queryClient } from "./query-client"
import { getCurrentSite } from "./current-site"

import { SiteKey } from "../types/site"

const SITE_TO_EMAIL_MAP: Record<SiteKey, string> = {
  stitch: "cecilia@example.com",
  luminara: "emily@example.com",
  pug: "rene@example.com",
}

export async function switchSite(site: SiteKey) {
  setCookie("user", SITE_TO_EMAIL_MAP[site])

  const hasSiteChanged = site !== getCurrentSite()

  if (hasSiteChanged) {
    await queryClient.refetchQueries({
      predicate: (query) =>
        ["products", "categories"].includes(query.queryKey.toString()),
    })
  }
}
