import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { withProductClickAction } from "../../utils/metabase-plugins"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Container mih="100vh" className="question-container smartscalar">
      <RemountOnSiteChange>
        <InteractiveQuestion
          questionId={questionId}
          plugins={{ mapQuestionClickActions: withProductClickAction() }}
        />
      </RemountOnSiteChange>
    </Container>
  )
}
