import { Title, Box, Stack, Flex } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Stack className="gap-y-8">
      <Flex className="overflow-y-scroll" h="700px">
        <InteractiveQuestion questionId={144} height="100%" />
      </Flex>

      <Flex className="overflow-y-scroll" h="700px">
        <InteractiveQuestion questionId={158} height="100%" />
      </Flex>

      <Flex className="overflow-y-scroll" h="700px">
        <InteractiveQuestion questionId={160} height="100%" />
      </Flex>
    </Stack>
  </Stack>
)
