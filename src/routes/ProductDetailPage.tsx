import { Box, Grid, Image, Text, Flex, Card, Stack, Title } from "@mantine/core"
import {
  InteractiveQuestion,
  StaticQuestion,
} from "@metabase/embedding-sdk-react"

import "../styles/product-detail.css"

interface Props {
  id: string
}

export const ProductDetailPage = (props: Props) => {
  return (
    <Grid>
      <Grid.Col span={4} className="text-white space-y-4">
        <Box className="space-y-2">
          <Text>outdoor</Text>

          <Image src="/mock-t-shirt.webp" maw={150} />
        </Box>

        <Flex direction="column">
          <Flex>
            <Text>DETAILS</Text>
            <Flex />
          </Flex>

          <Box maw={200}>
            <Flex>
              <Text w="100%">material</Text>
              <Text>cotton</Text>
            </Flex>

            <Flex>
              <Text w="100%">manufacturer</Text>
              <Text>hering</Text>
            </Flex>

            <Flex>
              <Text w="100%">price</Text>
              <Text>$23.99</Text>
            </Flex>

            <Flex>
              <Text w="100%">discount</Text>
              <Text>$4.00</Text>
            </Flex>
          </Box>
        </Flex>
      </Grid.Col>

      <Grid.Col span={8} className="space-y-5">
        <Flex w="100%" justify="space-between" maw={400}>
          <Text c="white" fw="bolder" lts={1.5} size="xs">
            INSIGHTS
          </Text>
          <Text c="#cee9e9" fw="bold" size="xs">
            See more
          </Text>
        </Flex>

        <Card
          maw={400}
          h={300}
          bg="none"
          className="text-white pd-question-container border border-[#7173AD]"
        >
          <Title size="h3" pb={10}>
            Orders over time
          </Title>

          <InteractiveQuestion questionId={90} />
        </Card>

        <Card
          maw={400}
          h={78}
          bg="none"
          className="text-white pd-trend-question-container border border-[#7173AD]"
        >
          <StaticQuestion questionId={91} showVisualizationSelector={false} />
        </Card>

        <Card
          maw={400}
          h={150}
          bg="none"
          className="text-white pd-question-container border border-[#7173AD]"
        >
          <Title size="h3" pb={10}>
            Sales goal
          </Title>

          {/* <StaticQuestion questionId={92} showVisualizationSelector={false} /> */}
        </Card>
      </Grid.Col>
    </Grid>
  )
}
