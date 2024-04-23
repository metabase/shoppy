import { API_HOST } from "../constants/env"
import { Product } from "../types/product"

export async function getProductList(): Promise<Product[]> {
  const response = await fetch(`${API_HOST}/products`, {
    method: "GET",
  })

  const { products } = (await response.json()) as { products: Product[] }

  return products
}
