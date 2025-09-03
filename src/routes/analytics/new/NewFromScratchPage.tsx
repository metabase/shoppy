import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../../constants/data-picker"

export const NewFromScratchPage = () => {
  const { collectionId, onSaveQuestion } = useCreateQuestionHelpers()

  return (
    <Container w="100%">
      <InteractiveQuestion
        questionId="new"
        onSave={onSaveQuestion}
        targetCollection={collectionId}
        entityTypes={DATA_PICKER_ALLOWED_ENTITY_TYPES}
        isSaveEnabled
      />
    </Container>
  )
}
