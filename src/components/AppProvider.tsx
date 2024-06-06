import {
  MetabaseProvider,
  type MetabaseTheme,
  type SDKConfig,
} from "@metabase/embedding-sdk-react"

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

const theme: MetabaseTheme = {
  fontFamily: "Lato",
  fontSize: "14px",
  lineHeight: "1.1rem",
  colors: {
    brand: "#98D9D9",
    "text-primary": "#FFF",
    "text-secondary": "#FFF",
    background: "#4C5773",
    charts: ["#98D9D9"],
  },
  components: {
    scalar: {
      value: {
        fontSize: "35px",
        lineHeight: "42px",
      },
    },
  },
}

export const AppProvider = ({ children }: Props) => (
  <MetabaseProvider config={config} theme={theme}>
    {children}
  </MetabaseProvider>
)
