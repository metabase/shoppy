import { Box, Title, Stack } from "@mantine/core"

import {
  InteractiveDashboard,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Box>
      <InteractiveQuestion questionId={95} height={500} />
      <InteractiveQuestion questionId={95} height={500} />
      <InteractiveDashboard dashboardId={17} />
      <InteractiveDashboard dashboardId={10} />
    </Box>
  </Stack>
)
