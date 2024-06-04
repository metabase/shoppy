import { API_HOST } from "../constants/env"
import { User } from "../types/user"

export async function getUser(): Promise<User | null> {
  try {
    const req = await fetch(`${API_HOST}/user`, { credentials: "include" })
    if (req.status === 401) return null

    const { user } = await req.json()

    return user ?? null
  } catch (error) {
    return null
  }
}
