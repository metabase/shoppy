export interface User {
  email: string
  firstName: string
  lastName: string
  group: string
  shopId: number

  hash?: string
  exp?: number
}
