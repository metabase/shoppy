import { useMutation, useQuery } from "@tanstack/react-query"
import { Redirect } from "wouter"

import { getUser } from "../utils/query-user"
import { FullPageLoader } from "./Loader"
import { loginToSite } from "../utils/switch-site"
import { useEffect } from "react"
import { ThemeKey } from "../types/theme"
import { getCurrentTheme } from "../utils/current-theme"

interface Props {
  children: React.ReactNode
}

export const AuthCheck = (props: Props) => {
  const query = useQuery({
    queryKey: ["auth"],
    queryFn: getUser,
  })

  const loginMutation = useMutation({
    mutationFn: loginToSite,
    mutationKey: ["login"],
  })

  useEffect(() => {
    if (!query.data?.email) {
      loginMutation.mutate(null)
    }
  }, [query.data])

  if (query.isLoading || loginMutation.isPending) {
    return <FullPageLoader />
  }

  if (!query.data?.email) {
    return <div>authenticating</div>
  }

  return props.children
}
