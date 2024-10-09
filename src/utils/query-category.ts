import type { Category } from "../types/category"

import { API_HOST } from "../constants/env"
import { SiteKey } from "../types/site"

export async function getCategoryList(site: SiteKey): Promise<Category[]> {
  const response = await fetch(`${API_HOST}/categories?site=${site}`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    return []
  }

  const { categories } = (await response.json()) as { categories: Category[] }

  return categories
}
