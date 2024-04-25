export interface Product {
  id: number
  title: string
  imageUrl: string | null
  category: { name: string }
}
