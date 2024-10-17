import { Stack, Title } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const KitchenSink = () => (
  <Stack>
    <InteractiveQuestion
      questionId={158}
      height={700}
      withTitle
      customTitle={
        <Title fw={400} size="h2" className="product-detail-card-title">
          Orders over time
        </Title>
      }
      isSaveEnabled
    />
  </Stack>
)
