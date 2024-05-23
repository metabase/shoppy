import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

const questions: number[] = [
  // bar
  122,

  // line
  123,

  // area
  124,
]

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Grid pb={20}>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <StaticQuestion questionId={q} showVisualizationSelector={false} />
        </Grid.Col>
      ))}
    </Grid>

    <Title pb={8} size="h2">
      Layout Test
    </Title>

    <Stack>
      <Title pb={8} size="h4">
        Flex
      </Title>

      <Flex>
        <StaticQuestion questionId={122} showVisualizationSelector={false} />
      </Flex>

      <Box w="100%">
        <StaticQuestion questionId={76} showVisualizationSelector={false} />
      </Box>

      <Title pb={8} size="h4">
        Pie Chart
      </Title>

      <Box w="100%">
        <StaticQuestion questionId={116} showVisualizationSelector={false} />
      </Box>

      <Title pb={8} size="h4">
        Funnel
      </Title>

      <Box w="100%">
        <StaticQuestion questionId={118} showVisualizationSelector={false} />
      </Box>

      <Title pb={8} size="h4">
        Waterfall
      </Title>

      <Box w="100%">
        <StaticQuestion questionId={119} showVisualizationSelector={false} />
      </Box>

      <Title pb={8} size="h4">
        Row
      </Title>

      <Box w="100%">
        <StaticQuestion questionId={120} showVisualizationSelector={false} />
      </Box>
    </Stack>
  </Stack>
)
