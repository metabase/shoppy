import type { Category } from "../types/category"

import { API_HOST, API_VERSION } from "../constants/env"
import { SiteKey } from "../types/site"

export async function getCategoryList(site: SiteKey): Promise<Category[]> {
  const response = await fetch(
    `${API_HOST}/categories?site=${site}&v=${API_VERSION}`,
    {
      method: "GET",
      credentials: "include",
    },
  )

  if (!response.ok) {
    return []
  }

  const { categories } = (await response.json()) as { categories: Category[] }

  return categories
}
