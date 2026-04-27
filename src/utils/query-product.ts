import { API_HOST, API_VERSION } from "../constants/env"

import type { Product } from "../types/product"
import type { SiteKey } from "../types/site"

export async function getProductList(site: SiteKey): Promise<Product[]> {
  const response = await fetch(
    `${API_HOST}/products?site=${site}&v=${API_VERSION}`,
    {
      method: "GET",
      credentials: "include",
    },
  )

  if (!response.ok) {
    return []
  }

  const { products } = (await response.json()) as { products: Product[] }

  return products
}

export async function getProductById(id: number): Promise<Product | null> {
  if (id === null) return null

  const response = await fetch(`${API_HOST}/product/${id}?v=${API_VERSION}`, {
    method: "GET",
  })

  if (!response.ok) {
    return null
  }

  const { product } = (await response.json()) as { product: Product | null }

  return product ?? null
}
