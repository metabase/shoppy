import { Container } from "@mantine/core"

import { useGuestToken } from "../../hooks/useGuestToken"

interface Props {
  entity_id: string
}

export function QuestionPage(props: Props) {
  const token = useGuestToken({ type: "question", id: props.entity_id })

  return (
    <Container mih="100vh" className="question-container smartscalar">
      {token && (
        <metabase-question
          token={token}
          style={{ display: "block", minHeight: "100vh" }}
        />
      )}
    </Container>
  )
}
