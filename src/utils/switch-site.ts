import { themeAtom } from "../store/theme"
import { SiteKey } from "../types/site"
import { getCurrentTheme } from "./current-theme"
import { login } from "./login"
import { logout } from "./logout"
import { queryClient } from "./query-client"

const SITE_TO_USER_MAP: Record<SiteKey, string> = {
  stitch: "rene@example.com",
  luminara: "cecilia@example.com",
  pug: "emily@example.com",
}

export async function loginToSite(_site: SiteKey | null) {
  const site = _site ?? getCurrentTheme()

  const hasSiteChanged = site !== getCurrentTheme()

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

  if (hasSiteChanged) {
    await queryClient.invalidateQueries({
      predicate: (query) =>
        ["auth", "products", "categories"].includes(query.queryKey.toString()),
    })
  }
}
