import { Box } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnThemeChange } from "../../components/RemountOnThemeChange"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Box mih="100vh" className="smartscalar">
      <RemountOnThemeChange>
        <InteractiveQuestion questionId={questionId} />
      </RemountOnThemeChange>
    </Box>
  )
}
