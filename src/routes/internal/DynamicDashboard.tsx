import { Box, Flex, Stack } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const DynamicDashboardPage = () => (
  <Box w="100%" h="500px" data-testid="interactive-dashboard-root">
    <InteractiveDashboard
      dashboardId={12}
      withTitle={true}
      questionHeight={500}
      onLoad={() => console.log("InteractiveDashboard onLoad")}
      onLoadWithCards={() =>
        console.log("InteractiveDashboard onLoadWithCards")
      }
    />
  </Box>
)
