import { Box, Flex, Stack } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const DynamicDashboardPage = () => (
  <Box w="100%" h="500px" data-testid="interactive-dashboard-root">
    <InteractiveDashboard
      dashboardId={20}
      withTitle={true}
      questionHeight={500}
      onLoad={(dashboard) =>
        console.log("InteractiveDashboard onLoad", dashboard)
      }
      onLoadWithoutCards={(dashboard) =>
        console.log("InteractiveDashboard onLoadWithoutCards", dashboard)
      }
    />
  </Box>
)
