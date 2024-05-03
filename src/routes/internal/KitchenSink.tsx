import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"

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
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Grid pb={20}>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <Box className="ks-question-container" w="100%" h={300}>
            <StaticQuestion questionId={q} showVisualizationSelector={false} />
          </Box>
        </Grid.Col>
      ))}
    </Grid>

    <Title pb={8} size="h2">
      Layout Test
    </Title>

    <Stack>
      <Title pb={8} size="h4">
        Flex (h: 300px)
      </Title>

      <Flex mih={300}>
        <StaticQuestion questionId={95} showVisualizationSelector={false} />
      </Flex>

      <Title pb={8} size="h4">
        Card (h: 300px)
      </Title>

      <Card w="100%" h={300}>
        <StaticQuestion questionId={95} showVisualizationSelector={false} />
      </Card>

      <Title pb={8} size="h4">
        Box (h: 300px)
      </Title>

      <Box w="100%" h={300}>
        <StaticQuestion questionId={95} showVisualizationSelector={false} />
      </Box>
    </Stack>
  </Stack>
)
