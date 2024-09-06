import type { Category } from "../types/category"

import { API_HOST } from "../constants/env"

export async function getCategoryList(): Promise<Category[]> {
  const response = await fetch(`${API_HOST}/categories`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    return []
  }

  const { categories } = (await response.json()) as { categories: Category[] }

  return categories
}
