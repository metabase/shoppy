import { users } from "../constants/users"

export const findUserByEmail = (email: string) =>
  users.find((u) => u.email === email)
