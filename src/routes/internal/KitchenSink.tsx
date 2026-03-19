import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"

import { useGuestToken } from "../../hooks/useGuestToken"
import "./kitchen-sink.css"

const questions: string[] = [
  "DLILVZlY8HgJ8_27isdU0",
  "LjSC3sBU784om6-rnIpRm",
  "mOLR5JJIUcX1y3YSltWoH",
]

function GuestStaticQuestion({
  questionId,
  ...props
}: {
  questionId: string
  withChartTypeSelector?: boolean
}) {
  const token = useGuestToken({ type: "question", id: questionId })
  return <StaticQuestion token={token} {...props} />
}

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Grid pb={20}>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <GuestStaticQuestion questionId={q} withChartTypeSelector={false} />
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
        <GuestStaticQuestion
          questionId="DLILVZlY8HgJ8_27isdU0"
          withChartTypeSelector={false}
        />
      </Flex>

      <Title pb={8} size="h4">
        Card
      </Title>

      <Card w="100%">
        <GuestStaticQuestion
          questionId="DLILVZlY8HgJ8_27isdU0"
          withChartTypeSelector={false}
        />
      </Card>

      <Title pb={8} size="h4">
        Box
      </Title>

      <Box w="100%">
        <GuestStaticQuestion
          questionId="DLILVZlY8HgJ8_27isdU0"
          withChartTypeSelector={false}
        />
      </Box>

      <Title pb={8} size="h4">
        Table
      </Title>

      <Box w="100%" bg="white">
        <GuestStaticQuestion
          questionId="t07HOjt9YiRHcWnK7XrgE"
          withChartTypeSelector={false}
        />
      </Box>
    </Stack>
  </Stack>
)
