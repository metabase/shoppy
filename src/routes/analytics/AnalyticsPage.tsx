import { Box } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

interface Props {
  id: string
}

export function AnalyticsPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  return (
    <Box mih="100vh">
      <StaticDashboard dashboardId={dashboardId} withTitle withDownloads />
    </Box>
  )
}
