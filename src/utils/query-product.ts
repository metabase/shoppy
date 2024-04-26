import { API_HOST } from "../constants/env"
import { Product } from "../types/product"

const MOCK: Product = {
  id: 0,
  title: "foobaz",
  imageUrl: null,
  category: {
    name: "foobar",
  },
}

export async function getProductList(): Promise<Product[]> {
  return [MOCK]

  const response = await fetch(`${API_HOST}/products`, {
    method: "GET",
  })

  const { products } = (await response.json()) as { products: Product[] }

  return products
}

export async function getProductById(id: number): Promise<Product | null> {
  return MOCK

  if (id === null) return null

  const response = await fetch(`${API_HOST}/product/${id}`, {
    method: "GET",
  })

  const { product } = (await response.json()) as { product: Product | null }

  return product ?? null
}
