import { useMemo } from "react"
import { useAtom } from "jotai"

import { MetabaseProvider, type SDKConfig } from "@metabase/embedding-sdk-react"

import {
  API_HOST,
  JWT_PROVIDER_URI,
  METABASE_INSTANCE_URL,
} from "../constants/env"

import { MetabaseError, MetabaseLoader } from "./SdkStates"

import { siteAtom } from "../store/site"
import { SITE_CONFIG_MAP } from "../themes"
import { FontLoader } from "./FontLoader"

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
  const [siteKey] = useAtom(siteAtom)

  const theme = useMemo(() => {
    return SITE_CONFIG_MAP[siteKey].metabase
  }, [siteKey])

  return (
    <MetabaseProvider config={config} theme={theme}>
      {children}

      <FontLoader />
    </MetabaseProvider>
  )
}
