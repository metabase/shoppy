import { queryClient } from "./query-client"

import { SiteKey } from "../types/site"
import { siteAtom } from "../store/site"

import { store } from "../store"

export async function refetchSiteContent(site: SiteKey) {
  const hasSiteChanged = site !== store.get(siteAtom)

  if (hasSiteChanged) {
    await queryClient.refetchQueries({
      predicate: (query) =>
        ["products", "categories"].includes(query.queryKey.toString()),
    })
  }
}
