import { SiteKey } from "../types/site"

export const QUESTION_TEMPLATE_COLLECTION_ID = 42

export const SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS: Record<SiteKey, number> = {
  stitch: 45,
  luminara: 46,
  pug: 47,
  proficiency: 100,
}

export const SANDBOXED_USER_GENERATED_COLLECTIONS: Record<SiteKey, number> = {
  stitch: 48,
  luminara: 49,
  pug: 50,
  proficiency: 101,
}
