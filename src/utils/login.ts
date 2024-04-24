import { AUTH_API_HOST } from "../constants/env"

type LoginStatus = { ok: boolean; error?: string }

export async function login(
  email: string,
  password: string,
): Promise<LoginStatus> {
  try {
    const response = await fetch(`${AUTH_API_HOST}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })

    if (response.status === 200) return { ok: true }

    const { message } = await response.json()

    return { ok: false, error: message }
  } catch (error) {
    return { ok: false, error: "an unexpected error has occurred" }
  }
}
