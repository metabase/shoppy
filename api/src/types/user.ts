export interface User {
  email: string
  firstName: string
  lastName: string
  group: string
  hash: string

  exp?: number
}
