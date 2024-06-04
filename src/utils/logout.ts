import { API_HOST } from "../constants/env"

export async function logout(): Promise<boolean> {
  const response = await fetch(`${API_HOST}/logout`, {
    method: "POST",
    credentials: "include",
  })

  if (response.status === 200) return true

  const reason = await response.text()

  throw new Error(`failed to logout: '${reason}'`)
}
