import { Box } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { InteractiveQuestionView } from "../../components/InteractiveQuestionView"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Box mih="100vh" className="smartscalar">
      <RemountOnSiteChange>
        <InteractiveQuestion questionId={questionId}>
          <InteractiveQuestionView />
        </InteractiveQuestion>
      </RemountOnSiteChange>
    </Box>
  )
}
