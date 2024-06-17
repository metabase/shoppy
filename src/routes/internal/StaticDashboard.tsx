import { Box, Flex, Stack } from "@mantine/core"
import { StaticDashboard } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const StaticDashboardPage = () => (
  <Box w="100%" h="800px" data-testid="interactive-dashboard-root">
    <StaticDashboard dashboardId={12} withTitle={true} />
  </Box>
)
