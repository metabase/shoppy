import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"
import {
  InteractiveQuestion,
  StaticQuestion,
} from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

const questions: number[] = [
  // bar
  95,

  // line
  96,

  // area
  97,
]

export const KitchenSink = () => (
  <Stack>
    {/* <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Grid pb={20}>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <StaticQuestion questionId={q} showVisualizationSelector={false} />
        </Grid.Col>
      ))}
    </Grid> */}

    <Title pb={8} size="h2">
      Layout Test
    </Title>

    <Stack>
      <Title pb={8} size="h4">
        P2
      </Title>

      <Box w="100%">
        <InteractiveQuestion questionId={117} height={600} />
      </Box>

      {/* <Title pb={8} size="h4">
        Flex
      </Title>

      <Flex>
        <StaticQuestion questionId={95} showVisualizationSelector={false} />
      </Flex>

      <Title pb={8} size="h4">
        Table
      </Title>

      <Box w="100%" bg="white">
        <StaticQuestion questionId={76} showVisualizationSelector={false} />
      </Box> */}
    </Stack>
  </Stack>
)
