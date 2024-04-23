import { MetabaseProvider } from "@metabase/embedding-sdk-react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import {
  API_HOST,
  JWT_PROVIDER_URI,
  METABASE_INSTANCE_URL,
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

  authType: "jwt",
  jwtProviderUri: `${API_HOST}${JWT_PROVIDER_URI}`,
}

export const queryClient = new QueryClient()

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MetabaseProvider config={config}>{children}</MetabaseProvider>
    </QueryClientProvider>
  )
}
