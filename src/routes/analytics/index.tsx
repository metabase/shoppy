import { Flex, Box } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

export function AnalyticsPage() {
  return (
    <Box mih="100vh" className="[&>div]:min-h-screen">
      <StaticDashboard dashboardId={17} withTitle withDownloads />
    </Box>
  )
}
