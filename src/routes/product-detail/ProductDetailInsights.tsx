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
      h={300}
      bg="none"
      className="text-white pd-question-container border border-[#7173AD] rounded-md"
    >
      <Title size="h3" pb={10}>
        Orders over time
      </Title>

      <InteractiveQuestion questionId={90} />
    </Card>

    <Card
      maw={MAX_W}
      h={78}
      bg="none"
      className="text-white pd-trend-question-container border border-[#7173AD]"
    >
      <StaticQuestion questionId={91} showVisualizationSelector={false} />
    </Card>

    <Card
      maw={MAX_W}
      h={280}
      bg="none"
      className="text-white pd-question-container border border-[#7173AD]"
    >
      <Title size="h3" pb={10}>
        Sales goal
      </Title>

      <StaticQuestion questionId={85} showVisualizationSelector={false} />
    </Card>
  </Box>
)
