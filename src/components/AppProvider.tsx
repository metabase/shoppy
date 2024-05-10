import {
  MetabaseProvider,
  type MetabaseTheme,
  type SDKConfig,
} from "@metabase/embedding-sdk-react"

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
 */
const config: SDKConfig = {
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  jwtProviderUri: `${API_HOST}${JWT_PROVIDER_URI}`,
}

export const queryClient = new QueryClient()

const theme: MetabaseTheme = {
  fontFamily: "Lato",
  fontSize: "1rem",
  lineHeight: "1.1rem",
  colors: {
    brand: "#98D9D9",
    "text-dark": "white",
    "text-light": "#373F53",
  },
  components: {
    table: {
      cell: {
        background: "#eee",
      },
    },
  },
}

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MetabaseProvider config={config} theme={theme}>
        {children}
      </MetabaseProvider>
    </QueryClientProvider>
  )
}
