import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Container mih="100vh" className="question-container smartscalar">
      <RemountOnSiteChange>
        <InteractiveQuestion questionId={questionId} />
      </RemountOnSiteChange>
    </Container>
  )
}
