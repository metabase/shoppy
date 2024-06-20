export interface Product {
  id: number
  title: string
  imageUrl: string | null
  category: { id: number; name: string }
}
