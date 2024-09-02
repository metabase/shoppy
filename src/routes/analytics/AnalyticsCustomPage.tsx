import { Box, Button, Flex } from "@mantine/core"
import { useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import "./analytics-custom-page.css"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { NewQuestionMenu } from "../../components/NewQuestionMenu"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()

  return (
    <Box p={20}>
      <Flex justify="flex-end">
        <NewQuestionMenu position="bottom-end">
          <Button>New Question</Button>
        </NewQuestionMenu>
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
