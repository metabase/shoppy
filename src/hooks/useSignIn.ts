import { API_HOST } from "../constants/env"

export async function signIn(site: string) {
  await fetch(`${API_HOST}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ site }),
  })
}
