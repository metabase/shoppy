import { SiteKey } from "../types/site"
import { getCurrentSite } from "./current-site"
import { login } from "./login"
import { logout } from "./logout"
import { queryClient } from "./query-client"

const SITE_TO_USER_MAP: Record<SiteKey, string> = {
  stitch: "cecilia@example.com",
  luminara: "emily@example.com",
  pug: "rene@example.com",
}

export async function loginToSite(_site: SiteKey | null) {
  const site = _site ?? getCurrentSite()

  const hasSiteChanged = site !== getCurrentSite()

  try {
    if (hasSiteChanged) {
      await logout()
    }
  } catch {
    // logout may fail if the user is not logged in.
  }

  await login({
    email: SITE_TO_USER_MAP[site],
    password: "password",
  })

  await queryClient.refetchQueries({
    predicate: (query) =>
      ["auth", "products", "categories"].includes(query.queryKey.toString()),
  })
}
