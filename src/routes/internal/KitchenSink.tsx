import { Stack } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const KitchenSink = () => (
  <Stack>
    <InteractiveQuestion questionId={158} height={700} />
  </Stack>
)
