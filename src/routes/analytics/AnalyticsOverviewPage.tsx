import { Container, SimpleGrid, Stack, Title } from "@mantine/core"

import { DashboardLinkCard } from "./DashboardLinkCard"

import { overviewLinkCards } from "./link-cards"

export function AnalyticsOverviewPage() {
  return (
    <Container pt="80px">
      <Title className="overview-title" pb="30px">
        Overview
      </Title>

      <Stack>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
          {overviewLinkCards.map((card) => (
            <DashboardLinkCard key={card.id} {...card} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
