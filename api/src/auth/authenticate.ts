import argon2 from "argon2"

import { User } from "../types/user"
import { users } from "../constants/users"

const findUserByEmail = (email: string) => users.find((u) => u.email === email)

export async function authenticate(
  email: string,
  password: string,
): Promise<User | null> {
  const user = findUserByEmail(email)
  if (!user || !user.hash) return null

  const verified = await argon2.verify(user.hash, password)

  return verified ? user : null
}
