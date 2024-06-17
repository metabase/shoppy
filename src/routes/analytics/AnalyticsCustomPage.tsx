import { Box } from "@mantine/core"
import { useLocation } from "wouter"
import { CollectionBrowser } from "@metabase/embedding-sdk-react"

export function AnalyticsCustomPage() {
  const [_, navigate] = useLocation()

  return (
    <Box>
      <CollectionBrowser
        collectionId={0}
        onClick={(item) => {
          if (item.model === "dashboard") {
            navigate(`/analytics/${item.id}`)
          } else {
            console.log(item)
          }

          if (item.type === "question") {
            navigate(`/question/${item.id}`)
          }
        }}
      />
    </Box>
  )
}
