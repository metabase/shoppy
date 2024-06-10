import { Flex } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

export function AnalyticsPage() {
  return (
    <Flex>
      <StaticDashboard dashboardId={17} withTitle withDownloads />
    </Flex>
  )
}
