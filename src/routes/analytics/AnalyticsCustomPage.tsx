import { Box, Flex } from "@mantine/core"
import { useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import "./analytics-custom-page.css"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { NewQuestionButton } from "../../components/NewQuestionButton"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()

  return (
    <Box p={20}>
      <Flex justify="flex-end">
        <NewQuestionButton />
      </Flex>

      <RemountOnSiteChange>
        <CollectionBrowser
          collectionId={0}
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
    </Box>
  )
}
