import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { withProductClickAction } from "../../utils/metabase-plugins"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../constants/data-picker"

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
          entityTypes={DATA_PICKER_ALLOWED_ENTITY_TYPES}
        />
      </RemountOnSiteChange>
    </Container>
  )
}
