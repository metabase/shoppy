import { SITE_KEY } from "../store/site"

const MIGRATE_TO_ACME_KEY = "migrated-default-site-to-acme"

/**
 * If the user has visited the previous version of the demo before,
 * we want to show them "acme" so they get to see the new theme.
 */
export function migrateDefaultSiteToAcme() {
  const hasMigrated = localStorage.getItem(MIGRATE_TO_ACME_KEY)

  // Only do this once.
  if (hasMigrated) {
    return
  }

  localStorage.removeItem(SITE_KEY)
  localStorage.setItem(MIGRATE_TO_ACME_KEY, "true")
}
