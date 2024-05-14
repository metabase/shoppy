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
  fontSize: "16px",
  lineHeight: 1.5,
  colors: {
    brand: "#e74c3c",
    "text-dark": "#c7ecee",
    "text-light": "#c7ecee",
    "text-medium": "#c7ecee",
  },
  components: {
    table: {
      cell: {
        textColor: "#ecf0f1",
        backgroundColor: "#e74c3c",
      },
      idColumn: {
        textColor: "#e74c3c",
        backgroundColor: "#ecf0f1",
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
