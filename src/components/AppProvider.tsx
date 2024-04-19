import { MetabaseProvider } from "@metabase/embedding-sdk-react"

import { METABASE_API_KEY, METABASE_INSTANCE_URL } from "../constants/env"

interface Props {
  children: React.ReactNode
}

const config = {
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  font: "Inter",
  authType: "apiKey",
  apiKey: METABASE_API_KEY,
}

export const AppProvider = ({ children }: Props) => {
  return <MetabaseProvider config={config}>{children}</MetabaseProvider>
}