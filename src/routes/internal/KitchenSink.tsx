import { Box, Title, Stack } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Box>
      <InteractiveQuestion questionId={95} height={300} />
      {/* <InteractiveQuestion questionId={95} height={300} /> */}
    </Box>
  </Stack>
)
