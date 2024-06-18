import { SimpleGrid, Stack, Title } from "@mantine/core"

import { DashboardLinkCard } from "./DashboardLinkCard"

import { overviewLinkCards } from "./link-cards"

export function AnalyticsOverviewPage() {
  return (
    <Stack mih="100vh" className="gap-y-6 mt-8">
      <Title size="h2">Overview</Title>

      <Stack>
        <Title c="#FFD3A7" size="17px">
          Fluffy Pearls dashboards
        </Title>

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }}>
          {overviewLinkCards.map((card) => (
            <DashboardLinkCard {...card} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}
