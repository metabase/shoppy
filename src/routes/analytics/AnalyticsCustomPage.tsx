import { Button, Container, Flex } from "@mantine/core"
import { useAtom } from "jotai"
import { Link, useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { NewQuestionMenu } from "../../components/NewQuestionMenu"
import { SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS } from "../../constants/collections"
import { createDashboardIdAtom } from "../../store/create"

import "./analytics-custom-page.css"
import { siteAtom } from "../../store/site"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()
  const [, setDashboardId] = useAtom(createDashboardIdAtom)

  const [site] = useAtom(siteAtom)
  const collectionId = SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS[site]

  return (
    <Container w="100%" p={20}>
      <Flex justify="flex-end" gap="xs" pb="xs">
        <NewQuestionMenu position="bottom-end">
          <Button>New Question</Button>
        </NewQuestionMenu>

        <Link
          href="/analytics/new/dashboard"
          onClick={() => setDashboardId(null)}
        >
          <Button>New Dashboard</Button>
        </Link>
      </Flex>

      <RemountOnSiteChange>
        <CollectionBrowser
          collectionId={collectionId}
          className="analytics-collection-browser"
          onClick={(item) => {
            if (item.model === "dashboard") {
              navigate(`/analytics/${item.id}`)
            } else if (item.model === "card") {
              navigate(`/question/${item.id}`)
            }
          }}
        />
      </RemountOnSiteChange>
    </Container>
  )
}
