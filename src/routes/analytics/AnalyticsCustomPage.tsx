import { useAtom } from "jotai"
import { useLocation } from "wouter"
import { Container, Flex } from "@mantine/core"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import { NewQuestionMenu } from "../../components/NewQuestionMenu"

import { siteAtom } from "../../store/site"
import { createDashboardIdAtom } from "../../store/create"

import { SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS } from "../../constants/collections"

import { useReloadOnSiteChange } from "../../utils/use-site-changed"

import "./analytics-custom-page.css"
import { ThemedButton } from "../../components/ThemedButton"
import { LinkWithSearchParams } from "../../components/LinkWithSearchParams"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()
  const [, setDashboardId] = useAtom(createDashboardIdAtom)

  const [site] = useAtom(siteAtom)
  const collectionId = SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS[site]

  useReloadOnSiteChange()

  return (
    <Container w="100%" p={20}>
      <Flex justify="flex-end" gap="xs" pb="xs" className="hide-on-mobile">
        <NewQuestionMenu position="bottom-end">
          <ThemedButton>New Question</ThemedButton>
        </NewQuestionMenu>

        <LinkWithSearchParams
          href="/analytics/new/dashboard"
          onClick={() => setDashboardId(null)}
        >
          <ThemedButton>New Dashboard</ThemedButton>
        </LinkWithSearchParams>
      </Flex>

      <CollectionBrowser
        collectionId={collectionId}
        className="analytics-collection-browser"
        onClick={(item) => {
          if (item.model === "dashboard") {
            navigate(`/analytics/${item.entity_id}`)
          } else if (item.model === "card") {
            navigate(`/question/${item.entity_id}`)
          }
        }}
      />
    </Container>
  )
}
