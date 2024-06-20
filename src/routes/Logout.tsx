import { Box, Loader, Title } from "@mantine/core"
import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"

import { logout } from "../utils/logout"
import { queryClient } from "../utils/query-client"

export function Logout() {
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })

      // Workaround: force a full page reload to reset the MetabaseProvider state
      window.location.href = "/"
    },
  })

  const { mutate } = logoutMutation

  useEffect(mutate, [mutate])

  if (logoutMutation.isError) {
    return (
      <Box className="space-y-5">
        <Title size="h2">Error logging out.</Title>

        <Box>{logoutMutation.error.message}</Box>
      </Box>
    )
  }

  return (
    <Box className="space-y-5">
      <Title size="h2">Logging out...</Title>

      <Loader />
    </Box>
  )
}
