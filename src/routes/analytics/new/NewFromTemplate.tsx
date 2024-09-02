import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  ModifyQuestion,
} from "@metabase/embedding-sdk-react"
import { useState } from "react"

export const NewFromTemplate = () => {
  const [selectedQuestionId, setQuestionId] = useState<number | null>(null)

  if (selectedQuestionId === null) {
    return (
      <Container>
        <Title fz="28px" mb="md">
          Pick a question
        </Title>

        <CollectionBrowser
          collectionId={0}
          visibleEntityTypes={["question"]}
          onClick={(item) => setQuestionId(item.id)}
        />
      </Container>
    )
  }

  if (selectedQuestionId !== null) {
    return (
      <Container w="100%">
        <ModifyQuestion questionId={selectedQuestionId} />
      </Container>
    )
  }

  return null
}
