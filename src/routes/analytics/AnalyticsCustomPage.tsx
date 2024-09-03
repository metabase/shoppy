import { Button, Container, Flex } from "@mantine/core"
import { Link, useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import "./analytics-custom-page.css"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { NewQuestionMenu } from "../../components/NewQuestionMenu"
import { CUSTOM_ANALYTICS_COLLECTION_ID } from "../../constants/collections"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()

  return (
    <Container w="100%" p={20}>
      <Flex justify="flex-end" gap="xs">
        <Link href="/analytics/new/dashboard">
          <Button>New Dashboard</Button>
        </Link>

        <NewQuestionMenu position="bottom-end">
          <Button>New Question</Button>
        </NewQuestionMenu>
      </Flex>

      <RemountOnSiteChange>
        <CollectionBrowser
          collectionId={CUSTOM_ANALYTICS_COLLECTION_ID}
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
