import { Box } from "@mantine/core"

import { useGuestToken } from "../../hooks/useGuestToken"

interface Props {
  entity_id: string
}

export function DashboardPage(props: Props) {
  const token = useGuestToken({ type: "dashboard", id: props.entity_id })

  return (
    <Box mih="85vh" className="dashboard-container smartscalar" h="100%">
      {token && (
        <metabase-dashboard
          token={token}
          with-title="true"
          with-downloads="true"
          style={{ display: "block", minHeight: "85vh" }}
          custom-context="product_type=gadget"
        />
      )}
    </Box>
  )
}
