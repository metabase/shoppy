import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { InteractiveQuestionView } from "../../components/InteractiveQuestionView"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Container mih="100vh" className="question-container smartscalar" pt="80px">
      <RemountOnSiteChange>
        <InteractiveQuestion questionId={questionId}>
          <InteractiveQuestionView />
        </InteractiveQuestion>
      </RemountOnSiteChange>
    </Container>
  )
}
