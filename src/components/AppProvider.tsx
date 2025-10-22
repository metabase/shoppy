import { useMemo } from "react"
import { useAtom } from "jotai"

import {
  MetabaseProvider,
  type MetabaseAuthConfig,
} from "@metabase/embedding-sdk-react"

import {
  API_HOST,
  AUTH_PROVIDER_URI,
  IS_DEV,
  METABASE_INSTANCE_URL,
} from "../constants/env"

import { MetabaseError, MetabaseLoader } from "./SdkStates"

import { siteAtom } from "../store/site"
import { SITE_CONFIG_MAP } from "../constants/sites"
import { FontLoader } from "./FontLoader"

interface Props {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [site] = useAtom(siteAtom)

  const theme = useMemo(() => {
    return SITE_CONFIG_MAP[site].metabase
  }, [site])

  // Configuration for the Metabase provider.
  const authConfig: MetabaseAuthConfig = useMemo(() => {
    return {
      metabaseInstanceUrl: IS_DEV
        ? METABASE_INSTANCE_URL
        : `${window.location.origin}/mb`,

      // Append the current site as a query parameter to the auth provider URL.
      fetchRequestToken: () =>
        fetch(`${API_HOST}${AUTH_PROVIDER_URI}?site=${site}`).then((res) =>
          res.json(),
        ),
    }
  }, [site])

  return (
    <MetabaseProvider
      authConfig={authConfig}
      theme={theme}
      loaderComponent={MetabaseLoader}
      errorComponent={MetabaseError}
    >
      {children}

      <FontLoader />
    </MetabaseProvider>
  )
}
