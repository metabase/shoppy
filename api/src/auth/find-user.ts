import { users } from "../constants/users"

export const findUserByEmail = (email: string) =>
  users.find((user) => user.email === email)
