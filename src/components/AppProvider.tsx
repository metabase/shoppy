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
  fontFamily: "Custom",
  fontSize: "14px",
  colors: {
    brand: "#FF8002",
    filter: "#00D9CC",
    "text-primary": "#FFF",
    "text-secondary": "#FFF",
    border: "#4C4A48",
    background: "#212121",
    charts: ["#00D9CC"],
  },
  components: {
    dashboard: {
      card: {
        border: "1px solid #4C4A48",
      },
    },
    scalar: {
      value: {
        fontSize: "25px",
        lineHeight: "33px",
      },
    },
  },
}

export const AppProvider = ({ children }: Props) => (
  <MetabaseProvider config={config} theme={theme}>
    {children}
  </MetabaseProvider>
)
