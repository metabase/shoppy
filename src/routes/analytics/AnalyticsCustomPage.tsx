import { useAtom } from "jotai"
import { Link, useLocation } from "wouter"
import { Button, Container, Flex } from "@mantine/core"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import { NewQuestionMenu } from "../../components/NewQuestionMenu"

import { siteAtom } from "../../store/site"
import { createDashboardIdAtom } from "../../store/create"

import { SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS } from "../../constants/collections"

import { useSiteChanged } from "../../utils/use-site-changed"

import "./analytics-custom-page.css"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()
  const [, setDashboardId] = useAtom(createDashboardIdAtom)

  const [site] = useAtom(siteAtom)
  const collectionId = SANDBOXED_CUSTOM_ANALYTICS_COLLECTIONS[site]

  useSiteChanged(() => window.location.reload())

  return (
    <Container w="100%" p={20}>
      <Flex justify="flex-end" gap="xs" pb="xs" className="hide-on-mobile">
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
    </Container>
  )
}
