import { Box, Stack, Title } from "@mantine/core"

import "./kitchen-sink.css"
import { StaticDashboard, StaticQuestion } from "@metabase/embedding-sdk-react"

export const KitchenSink = () => (
  <Stack>
    <Box>
      <StaticDashboard dashboardId={10} />
    </Box>

    <Title size="h3">Table Below</Title>

    <Box>
      <StaticQuestion questionId={93} />
    </Box>
  </Stack>
)
