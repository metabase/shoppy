import { SITE_KEY } from "../store/site"

const MIGRATE_TO_PROFICIENCY_LABS_KEY =
  "migrated-default-site-to-proficiency-labs"

/**
 * If the user has visited the previous version of the demo before,
 * we want to delete the site key so they get to see the new ProficiencyLabs theme.
 */
export function migrateDefaultSiteToProficiencyLabs() {
  const hasMigrated = localStorage.getItem(MIGRATE_TO_PROFICIENCY_LABS_KEY)

  // Only do this once.
  if (hasMigrated) {
    return
  }

  localStorage.removeItem(SITE_KEY)
  localStorage.setItem(MIGRATE_TO_PROFICIENCY_LABS_KEY, "true")
}
