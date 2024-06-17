import { Box } from "@mantine/core"
import { useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

export function AnalyticsOverviewPage() {
  const [_, navigate] = useLocation()

  return (
    <CollectionBrowser
      collectionId={0}
      onClick={(item) => {
        if (item.model === "dashboard") {
          navigate(`/analytics/${item.id}`)
        }

        if (item.type === "question") {
          navigate(`/question/${item.id}`)
        }
      }}
    />
  )
}
