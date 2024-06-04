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
  // CHANGE ME!
  fontSize: "14px",
  colors: {
    brand: "#98d9d9",
    background: "#7080aa",
    "text-primary": "#fff",
    "text-tertiary": "#fff",
    "text-secondary": "#fff",
    charts: [
      "#e74c3c",
      "#ff00ee",
      { base: "#ffcc00" },
      { base: "#be2edd", tint: "#e056fd" },
      { base: "#30336b", shade: "#130f40" },
      "#be2edd",
      "#8bb17b",
      "#e74c3c",
    ],
  },
  components: {
    table: {
      cell: {
        // CHANGE ME
        // fontSize: "14px",
      },
    },
    cartesian: {
      label: {
        // CHANGE ME
        // fontSize: "20px",
      },
    },
  },
}

export const AppProvider = ({ children }: Props) => (
  <MetabaseProvider config={config} theme={theme}>
    {children}
  </MetabaseProvider>
)
