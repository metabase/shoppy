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
import { useAtom } from "jotai"
import { $theme } from "../store/theme"
import { THEME_CONFIG_MAP } from "../themes"
import { useEffect, useMemo, useReducer } from "react"

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

export const AppProvider = ({ children }: Props) => {
  const [themeName] = useAtom($theme)

  const theme = useMemo(() => {
    return THEME_CONFIG_MAP[themeName].metabase
  }, [themeName])

  return (
    <MetabaseProvider
      config={config}
      theme={{ fontFamily: "Playfair Display" }}
    >
      {children}
    </MetabaseProvider>
  )
}
