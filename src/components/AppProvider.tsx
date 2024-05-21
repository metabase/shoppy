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
  fontFamily: "Playfair Display",
  // fontSize: "1rem",
  // lineHeight: "1.1rem",
  colors: {
    // brand: "#0d5353",
    // border: "#093333",
    // filter: "#e74c3c",
    background: "#7080aa",
    // "background-hover": "#fff",
    "text-primary": "#fff",
    "text-tertiary": "#fff",
    "text-secondary": "#fff",
    charts: [
      "#e74c3c",
      "#6ab04c",
      { base: "#4834d4" },
      { base: "#be2edd", lighter: "#e056fd" },
      { base: "#30336b", darker: "#130f40" },
    ],
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
