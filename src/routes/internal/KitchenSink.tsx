import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"
import { EditableDashboard } from "@metabase/embedding-sdk-react"

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Stack h="100vh">
      <EditableDashboard dashboardId={17} />
    </Stack>
  </Stack>
)
