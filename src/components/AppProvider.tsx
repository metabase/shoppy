import { MetabaseProvider } from "@metabase/embedding-sdk-react"

import {
  AUTH_API_HOST,
  JWT_PROVIDER_URI,
  METABASE_AUTH_TYPE,
  METABASE_INSTANCE_URL,
  METABASE_API_KEY,
} from "../constants/env"

interface Props {
  children: React.ReactNode
}

/**
 * Configuration for the Metabase provider.
 *
 * To authenticate with an API key instead of JWT, you can use the following configuration instead:
 * { authType: "apiKey", apiKey: METABASE_API_KEY }
 */
const config = {
  font: "Lato",
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  authType: METABASE_AUTH_TYPE,

  ...(METABASE_AUTH_TYPE === "jwt"
    ? { jwtProviderUri: `${AUTH_API_HOST}${JWT_PROVIDER_URI}` }
    : { apiKey: METABASE_API_KEY }),
}

export const AppProvider = ({ children }: Props) => {
  return <MetabaseProvider config={config}>{children}</MetabaseProvider>
}
