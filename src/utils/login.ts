import { AUTH_API_HOST } from "../constants/env"

export async function login(email: string, password: string) {
  const response = await fetch(`${AUTH_API_HOST}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })

  return await response.json()
}
