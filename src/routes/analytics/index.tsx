import { Box } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

export function AnalyticsPage() {
  return (
    <Box mih="100vh">
      <StaticDashboard dashboardId={17} withTitle withDownloads />
    </Box>
  )
}
