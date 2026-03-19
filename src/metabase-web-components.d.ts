import type { HTMLAttributes } from "react"

type MetabaseQuestionProps = HTMLAttributes<HTMLElement> & {
  token?: string | null
  "question-id"?: string | number
  "with-title"?: string
  "with-downloads"?: string
  "with-alerts"?: string
  "hidden-parameters"?: string
  "initial-sql-parameters"?: string
}

type MetabaseDashboardProps = HTMLAttributes<HTMLElement> & {
  token?: string | null
  "dashboard-id"?: string | number
  "with-title"?: string
  "with-downloads"?: string
  "with-subscriptions"?: string
  "initial-parameters"?: string
  "hidden-parameters"?: string
  "auto-refresh-interval"?: string
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "metabase-question": MetabaseQuestionProps
      "metabase-dashboard": MetabaseDashboardProps
    }
  }
}

declare global {
  interface Window {
    metabaseConfig?: {
      isGuest?: boolean
      instanceUrl?: string
      guestEmbedProviderUri?: string
    }
  }
}
