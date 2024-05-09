import { Flex, Card, Title, Text, Box } from "@mantine/core"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

const MAX_W = 600

export const ProductDetailInsights = () => (
  <Box className="space-y-5">
    <Flex w="100%" justify="space-between" maw={MAX_W}>
      <Text c="white" fw="bolder" lts={1.5} size="xs">
        INSIGHTS
      </Text>

      <Text c="#cee9e9" fw="bold" size="xs">
        See more
      </Text>
    </Flex>

    <Card
      maw={MAX_W}
      bg="none"
      className="text-white pd-question-container border border-[#7173AD] rounded-md"
      mih={220}
    >
      <Title size="h3" pb={10}>
        Orders over time
      </Title>

      <InteractiveQuestion questionId={95} />
    </Card>

    <Card
      maw={MAX_W}
      bg="none"
      className="text-white pd-trend-question-container border border-[#7173AD]"
      mih={40}
    >
      <StaticQuestion questionId={91} showVisualizationSelector={false} />
    </Card>

    <Card
      maw={MAX_W}
      bg="none"
      className="text-white pd-question-container border border-[#7173AD]"
      mih={150}
    >
      <Title size="h3" pb={10}>
        Sales goal
      </Title>

      <StaticQuestion questionId={85} showVisualizationSelector={false} />
    </Card>
  </Box>
)
