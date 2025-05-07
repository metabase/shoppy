import { METABASE_INSTANCE_URL } from "../constants/env"
import { MetabaseHealthStatus } from "../types/metabase-health-status"

export async function queryMetabaseInstanceStatus(): Promise<{
  status: MetabaseHealthStatus
}> {
  try {
    const response = await fetch(`${METABASE_INSTANCE_URL}/api/health`)

    if (!response.ok) {
      return { status: "error" }
    }

    return response.json()
  } catch {
    return { status: "error" }
  }
}
