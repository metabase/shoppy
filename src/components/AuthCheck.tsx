import { useQuery } from "@tanstack/react-query"
import { Redirect } from "wouter"

import { getUser } from "../utils/query-user"
import { FullPageLoader } from "./Loader"

interface Props {
  children: React.ReactNode
}

export const AuthCheck = (props: Props) => {
  const query = useQuery({ queryKey: ["auth"], queryFn: getUser })

  if (query.isLoading) return <FullPageLoader />

  if (!query.data?.email) {
    return <Redirect to="/login" />
  }

  return props.children
}
