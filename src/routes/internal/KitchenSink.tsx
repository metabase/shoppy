import { Box, Title, Grid } from "@mantine/core"
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
  <Box>
    <Title c="yellow" pb={8}>
      Kitchen Sink
    </Title>

    <Grid>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <div className="question-container w-full h-full min-h-[300px]">
            <StaticQuestion questionId={q} showVisualizationSelector={false} />
          </div>
        </Grid.Col>
      ))}
    </Grid>
  </Box>
)
