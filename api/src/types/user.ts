export interface User {
  email: string
  firstName: string
  lastName: string
  accountId: number
  accountName: string
  hash: string

  exp?: number
}
