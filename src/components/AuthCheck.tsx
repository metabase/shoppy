import { useQuery } from "@tanstack/react-query"
import { Redirect } from "wouter"
import { Box, Loader } from "@mantine/core"

import { getUser } from "../utils/query-user"

interface Props {
  children: React.ReactNode
}

export const AuthCheck = (props: Props) => {
  const query = useQuery({ queryKey: ["auth"], queryFn: getUser })

  if (query.isLoading) {
    return (
      <Box>
        <Loader />
      </Box>
    )
  }

  if (!query.data?.email) {
    return <Redirect to="/" />
  }

  return props.children
}
