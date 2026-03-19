import { Box, Title, Grid, Card, Stack, Flex } from "@mantine/core"

import { useGuestToken } from "../../hooks/useGuestToken"
import "./kitchen-sink.css"

const questions: string[] = [
  "DLILVZlY8HgJ8_27isdU0",
  "LjSC3sBU784om6-rnIpRm",
  "mOLR5JJIUcX1y3YSltWoH",
]

function GuestQuestion({ questionId }: { questionId: string }) {
  const token = useGuestToken({ type: "question", id: questionId })
  if (!token) return null
  return <metabase-question token={token} style={{ display: "block" }} />
}

export const KitchenSink = () => (
  <Stack>
    <Title pb={8} size="h2">
      Kitchen Sink
    </Title>

    <Grid pb={20}>
      {questions.map((q) => (
        <Grid.Col key={q} span={4}>
          <GuestQuestion questionId={q} />
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
        <GuestQuestion questionId="DLILVZlY8HgJ8_27isdU0" />
      </Flex>

      <Title pb={8} size="h4">
        Card
      </Title>

      <Card w="100%">
        <GuestQuestion questionId="DLILVZlY8HgJ8_27isdU0" />
      </Card>

      <Title pb={8} size="h4">
        Box
      </Title>

      <Box w="100%">
        <GuestQuestion questionId="DLILVZlY8HgJ8_27isdU0" />
      </Box>

      <Title pb={8} size="h4">
        Table
      </Title>

      <Box w="100%" bg="white">
        <GuestQuestion questionId="t07HOjt9YiRHcWnK7XrgE" />
      </Box>
    </Stack>
  </Stack>
)
