import { MetabaseProvider } from "@metabase/embedding-sdk-react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import {
  API_HOST,
  JWT_PROVIDER_URI,
  METABASE_INSTANCE_URL,
} from "../constants/env"

import { colorTuple } from "../utils/color-tuple"

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
  jwtProviderUri: `${API_HOST}${JWT_PROVIDER_URI}`,
}

export const queryClient = new QueryClient()

const theme = {
  fontFamily: "Lato, sans-serif",
  headings: { fontFamily: "Lato, sans-serif" },
  colors: {
    brand: colorTuple("hotpink"),
    "text-dark": colorTuple("hotpink"),
    "text-light": colorTuple("hotpink"),
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
