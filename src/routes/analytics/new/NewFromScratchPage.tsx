import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

import { CreateQuestionView } from "../../../components/CreateQuestionView"

export const NewFromScratchPage = () => {
  const { createdQuestionId, collectionId, onSaveQuestion } =
    useCreateQuestionHelpers()

  return (
    <Container w="100%">
      <InteractiveQuestion
        onSave={onSaveQuestion}
        questionId={createdQuestionId}
        saveToCollectionId={collectionId}
        isSaveEnabled
      >
        <CreateQuestionView />
      </InteractiveQuestion>
    </Container>
  )
}
