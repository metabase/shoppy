import { Box, Card, Flex, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import { Link } from "wouter"

export function AnalyticsOverviewPage() {
  return (
    <Stack mih="100vh" className="gap-y-6 mt-8">
      <Title size="h2">Overview</Title>

      <Stack>
        <Title c="#FFD3A7" size="17px">
          Fluffy Pearls dashboards
        </Title>

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }}>
          <DashboardLinkCard />
          <DashboardLinkCard />
          <DashboardLinkCard />
          <DashboardLinkCard />
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

const DashboardLinkCard = () => {
  return (
    <Link to="#!">
      <Card
        c="white"
        className="border-[#4C4A48] rounded-none gap-y-5 bg-transparent hover:bg-[#572B00]"
        withBorder
        p={12}
      >
        <Box>
          <Title size="h4">Inventory Performance</Title>

          <Text c="#ADABA9" fz="14px">
            No description.
          </Text>
        </Box>

        <Flex>
          <Text>
            Poom
            <span className="px-1"> • </span>
            3mo.
          </Text>
        </Flex>
      </Card>
    </Link>
  )
}
