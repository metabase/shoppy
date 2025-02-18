import { Container } from "@mantine/core"
import { CreateQuestion } from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

export const NewFromScratchPage = () => {
  const { collectionId, onSaveQuestion } = useCreateQuestionHelpers()

  return (
    <Container w="100%">
      <CreateQuestion
        onSave={onSaveQuestion}
        saveToCollectionId={collectionId}
        isSaveEnabled
      />
    </Container>
  )
}
