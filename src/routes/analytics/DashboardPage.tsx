import { Box } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

interface Props {
  id: string
}

export function DashboardPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  return (
    <Box mih="100vh" className="dashboard-container smartscalar">
      <InteractiveDashboard dashboardId={dashboardId} withTitle withDownloads />
    </Box>
  )
}
