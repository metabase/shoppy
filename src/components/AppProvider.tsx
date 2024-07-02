import { useMemo } from "react"
import { useAtom } from "jotai"

import { MetabaseProvider, type SDKConfig } from "@metabase/embedding-sdk-react"

import {
  API_HOST,
  JWT_PROVIDER_URI,
  METABASE_INSTANCE_URL,
} from "../constants/env"

import { MetabaseError, MetabaseLoader } from "./SdkStates"

import { $theme } from "../store/theme"
import { THEME_CONFIG_MAP } from "../themes"
import { FontLoader } from "../hooks/useFontLoader"

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
  const [themeKey] = useAtom($theme)

  const theme = useMemo(() => {
    return THEME_CONFIG_MAP[themeKey].metabase
  }, [themeKey])

  return (
    <MetabaseProvider config={config} theme={theme}>
      {children}

      <FontLoader />
    </MetabaseProvider>
  )
}
