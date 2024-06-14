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
  fontFamily: "Playfair Display",
  // fontSize: "94px",
  colors: {
    brand: "#98D9D9",
    filter: "#98D9D9",
    border: "#7173AD",
    "text-primary": "#FFF",
    "text-secondary": "#FFF",
    background: "#4C5773",
    // charts: [
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    //   "#ff0000",
    // ],
  },
  components: {
    dashboard: {
      card: {
        border: "1px solid #7173AD",
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
