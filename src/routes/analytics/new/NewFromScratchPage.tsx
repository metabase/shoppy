import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

export const NewFromScratchPage = () => {
  const { collectionId, onSaveQuestion } = useCreateQuestionHelpers()

  return (
    <Container w="100%">
      <InteractiveQuestion
        questionId="new"
        onSave={onSaveQuestion}
        targetCollection={collectionId}
        isSaveEnabled
      />
    </Container>
  )
}
