import { API_HOST } from "../constants/env"
import { Product } from "../types/product"

export async function getProductList(): Promise<Product[]> {
  const response = await fetch(`${API_HOST}/products`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    return []
  }

  const { products } = (await response.json()) as { products: Product[] }

  return products
}

export async function getProductById(id: number): Promise<Product | null> {
  if (id === null) return null

  const response = await fetch(`${API_HOST}/product/${id}`, {
    method: "GET",
  })

  if (!response.ok) {
    return null
  }

  const { product } = (await response.json()) as { product: Product | null }

  return product ?? null
}
