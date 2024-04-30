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
 */
const config = {
  font: "Lato",
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  authType: "jwt",
  jwtProviderUri: `${API_HOST}${JWT_PROVIDER_URI}`,
}

export const queryClient = new QueryClient()

type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never

export const colorTuple = (v: string): Tuple<string, 10> => [
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
]

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
