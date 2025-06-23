import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { withProductClickAction } from "../../utils/metabase-plugins"

interface Props {
  entity_id: string
}

export function QuestionPage(props: Props) {
  return (
    <Container mih="100vh" className="question-container smartscalar">
      <RemountOnSiteChange>
        <InteractiveQuestion
          questionId={props.entity_id}
          plugins={{ mapQuestionClickActions: withProductClickAction() }}
          entityTypeFilter={["model", "question"]}
        />
      </RemountOnSiteChange>
    </Container>
  )
}
