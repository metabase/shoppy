import { MetabaseProvider } from "@metabase/embedding-sdk-react"

import {
  AUTH_API_HOST,
  METABASE_API_KEY,
  METABASE_INSTANCE_URL,
} from "../constants/env"

interface Props {
  children: React.ReactNode
}

const config = {
  font: "Lato",
  metabaseInstanceUrl: METABASE_INSTANCE_URL,

  authType: "apiKey",
  apiKey: METABASE_API_KEY,

  // authType: "jwt",
  // jwtProviderUri: `${AUTH_API_HOST}${JWT_PROVIDER_URI}`,
}

export const AppProvider = ({ children }: Props) => {
  return <MetabaseProvider config={config}>{children}</MetabaseProvider>
}
