import { SiteKey } from "../types/site"

export const QUESTION_TEMPLATE_COLLECTION_ID = 42
export const DASHBOARD_COLLECTION_ID = 43

export const SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS: Record<SiteKey, number> = {
  stitch: 45,
  luminara: 46,
  pug: 47,
}
