import { SimpleGrid, Stack, Title } from "@mantine/core"

import { DashboardLinkCard } from "./DashboardLinkCard"

import { overviewLinkCards } from "./link-cards"

export function AnalyticsOverviewPage() {
  return (
    <Stack mih="100vh" className="gap-y-6 mt-8 mx-auto px-[50px]" maw="1100px">
      <Title size="48px" className="overview-title">
        Overview
      </Title>

      <Stack>
        <Title c="accent-light" size="17px">
          Fluffy Pearls dashboards
        </Title>

        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
          {overviewLinkCards.map((card) => (
            <DashboardLinkCard key={card.id} {...card} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}
