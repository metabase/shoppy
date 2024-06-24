import { Box } from "@mantine/core"
import { useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

import "./analytics-custom-page.css"

export function AnalyticsCustomPage() {
  const [, navigate] = useLocation()

  return (
    <Box p={20}>
      <CollectionBrowser
        collectionId={0}
        className="custom-collection-browser"
        onClick={(item) => {
          if (item.model === "dashboard") {
            navigate(`/analytics/${item.id}`)
          } else if (item.model === "card") {
            navigate(`/question/${item.id}`)
          }
        }}
      />
    </Box>
  )
}
