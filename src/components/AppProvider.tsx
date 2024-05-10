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
    brand: "#ffbe76",
    "text-dark": "#c7ecee",
    "text-light": "#4834d4",
  },
  components: {
    table: {
      cell: {
        textColor: "#c7ecee",
        backgroundColor: "#22a6b3",
      },
      header: {
        textColor: "#c7ecee",
        backgroundColor: "#22a6b3",
      },
      idColumn: {
        backgroundColor: "#c7ecee",
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
