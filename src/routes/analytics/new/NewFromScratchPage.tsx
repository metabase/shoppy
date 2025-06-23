import { Container } from "@mantine/core"
import {
  InteractiveQuestion,
  MetabotQuestion,
} from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"
import { useSearchParams } from "wouter"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../../constants/data-picker"

export const NewFromScratchPage = () => {
  const { collectionId, onSaveQuestion } = useCreateQuestionHelpers()
  const [searchParams] = useSearchParams()
  const shouldShowMetabot = searchParams.get("metabot") === "true"

  return (
    <Container w="100%">
      {shouldShowMetabot ? (
        <MetabotQuestion />
      ) : (
        <InteractiveQuestion
          questionId="new"
          onSave={onSaveQuestion}
          targetCollection={collectionId}
          entityTypes={DATA_PICKER_ALLOWED_ENTITY_TYPES}
          isSaveEnabled
        />
      )}
    </Container>
  )
}
