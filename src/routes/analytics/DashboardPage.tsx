import { Box } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

interface Props {
  id: string
}

export function DashboardPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  return (
    <Box mih="100vh" className="dashboard-container smartscalar">
      <StaticDashboard dashboardId={dashboardId} withTitle withDownloads />
    </Box>
  )
}
