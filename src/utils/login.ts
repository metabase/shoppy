import { API_HOST } from "../constants/env"

export type LoginValues = { email: string; password: string }

export async function login({
  email,
  password,
}: LoginValues): Promise<boolean> {
  try {
    const response = await fetch(`${API_HOST}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })

    if (response.status === 200) return true

    const { message } = await response.json()

    throw new Error(message)
  } catch (error) {
    throw new Error("an unexpected error has occurred")
  }
}
