import { useEffect } from "react"
import { useAtomValue } from "jotai"

import { API_HOST, IS_DEV, METABASE_INSTANCE_URL } from "../constants/env"
import { siteAtom } from "../store/site"
import { signIn } from "../hooks/useSignIn"

import { FontLoader } from "./FontLoader"

interface Props {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const site = useAtomValue(siteAtom)
  const instanceUrl = IS_DEV
    ? METABASE_INSTANCE_URL
    : `${window.location.origin}/mb`

  useEffect(() => {
    signIn(site)
  }, [site])

  useEffect(() => {
    window.metabaseConfig = {
      isGuest: true,
      instanceUrl,
      guestEmbedProviderUri: `${API_HOST}/refresh-guest-token`,
    }

    const script = document.createElement("script")
    // script.src = `${instanceUrl}/app/embed.js`
    // my local server with new refresh token change
    script.src = `http://localhost:3000/app/embed.js`
    script.defer = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [instanceUrl])

  return (
    <>
      {children}
      <FontLoader />
    </>
  )
}
