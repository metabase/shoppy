import { useEffect, useState } from "react"

import { API_HOST } from "../constants/env"

interface GuestTokenOptions {
  type: "question" | "dashboard"
  id: string
  params?: Record<string, string | number>
}

export function useGuestToken({ type, id, params = {} }: GuestTokenOptions) {
  const [token, setToken] = useState<string | null>(null)

  const paramsKey = JSON.stringify(params)

  useEffect(() => {
    const query = new URLSearchParams({ type, id })

    for (const [key, value] of Object.entries(params)) {
      query.set(key, String(value))
    }

    fetch(`${API_HOST}/guest-token?${query}`)
      .then((res) => res.json())
      .then((data) => setToken(data.token))
  }, [type, id, paramsKey])

  return token
}
