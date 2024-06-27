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
      <Box mih={500}>
        <InteractiveQuestion questionId={95} height={500} />
      </Box>
      <Box mih={500}>
        <InteractiveQuestion questionId={95} height={500} />
      </Box>
      <Box mih={500}>
        <InteractiveQuestion questionId={96} height={500} />
      </Box>
      <Box mih={500}>
        <InteractiveQuestion questionId={97} height={500} />
      </Box>
    </Box>
  </Stack>
)
