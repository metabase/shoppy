import { MetabaseProvider } from "@metabase/embedding-sdk-react"

import {
  AUTH_API_HOST,
  JWT_PROVIDER_URI,
  METABASE_INSTANCE_URL,
} from "../constants/env"

interface Props {
  children: React.ReactNode
}

/**
 * Configuration for the Metabase provider.
 */
const config = {
  font: "Lato",
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  authType: "jwt",
  jwtProviderUri: `${AUTH_API_HOST}${JWT_PROVIDER_URI}`,
}

export const AppProvider = ({ children }: Props) => {
  return <MetabaseProvider config={config}>{children}</MetabaseProvider>
}
