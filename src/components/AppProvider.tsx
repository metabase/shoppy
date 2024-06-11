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
  colors: {
    brand: "#98D9D9",
    filter: "#98D9D9",
    "text-primary": "#FFF",
    "text-secondary": "#FFF",
    "text-tertiary": "#FFF",
    background: "#2f3542",
    charts: ["#98D9D9"],
  },
  components: {
    dashboard: {
      card: {
        backgroundColor: "#ff6348",
      },
    },
    table: {
      cell: {
        /** Text color of cells, defaults to `text-primary`. */
        // textColor: "",
        /** Default background color of cells, defaults to `background` */
        backgroundColor: "#ff7f50",
        /** Font size of cell values, defaults to ~12.5px */
        // fontSize: "",
      },
      idColumn: {
        /** Text color of ID column, defaults to `brand`. */
        textColor: "#fff",
        /** Background color of ID column, defaults to `lighten(brand)`  */
        backgroundColor: "#ff6348ac",
      },
    },
    scalar: {
      value: {
        // fontSize: "25px",
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
