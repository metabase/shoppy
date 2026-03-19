import { Box } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

import { useGuestToken } from "../../hooks/useGuestToken"

interface Props {
  entity_id: string
}

export function DashboardPage(props: Props) {
  const token = useGuestToken({ type: "dashboard", id: props.entity_id })

  return (
    <Box mih="85vh" className="dashboard-container smartscalar" h="100%">
      <StaticDashboard token={token} withTitle withDownloads />
    </Box>
  )
}
