import { Container } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { useGuestToken } from "../../hooks/useGuestToken"

interface Props {
  entity_id: string
}

export function QuestionPage(props: Props) {
  const token = useGuestToken({ type: "question", id: props.entity_id })

  return (
    <Container mih="100vh" className="question-container smartscalar">
      <RemountOnSiteChange>
        <StaticQuestion token={token} />
      </RemountOnSiteChange>
    </Container>
  )
}
