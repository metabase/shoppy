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

import { MetabaseError, MetabaseLoader } from "./SdkStates"

interface Props {
  children: React.ReactNode
}

/**
 * Configuration for the Metabase provider.
 */
const config: SDKConfig = {
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  jwtProviderUri: `${API_HOST}${JWT_PROVIDER_URI}`,
  loaderComponent: MetabaseLoader,
  errorComponent: MetabaseError,
}

const theme: MetabaseTheme = {
  fontFamily: "Custom",
  fontSize: "14px",
  colors: {
    brand: "#FF8000",
    filter: "#00D9CC",
    "text-primary": "#F8F7F7",
    "text-secondary": "#F8F7F7",
    "text-tertiary": "#F8F7F7",
    border: "#4C4A48",
    background: "#212121",
    charts: ["#00D9CC"],
    positive: "#4AC40E",
    negative: "#FF0F00",
  },
  components: {
    dashboard: {
      card: {
        border: "1px solid #4C4A48",
      },
    },
    scalar: {
      value: {
        fontSize: "47px",
        lineHeight: "50px",
      },
    },
  },
}

export const AppProvider = ({ children }: Props) => (
  <MetabaseProvider config={config} theme={theme}>
    {children}
  </MetabaseProvider>
)
