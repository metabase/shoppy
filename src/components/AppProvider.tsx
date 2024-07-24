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
import { SITE_CONFIG_MAP } from "../constants/sites"
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
  const [site] = useAtom(siteAtom)

  const theme = useMemo(() => {
    return SITE_CONFIG_MAP[site].metabase
  }, [site])

  return (
    <MetabaseProvider config={config} theme={theme}>
      {children}

      <FontLoader />
    </MetabaseProvider>
  )
}
