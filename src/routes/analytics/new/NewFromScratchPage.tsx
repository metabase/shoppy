import { Container } from "@mantine/core"
import {
  InteractiveQuestion,
  MetabotQuestion,
} from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"
import { useSearchParams } from "wouter"

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
          entityTypeFilter={["model", "question"]}
          isSaveEnabled
        />
      )}
    </Container>
  )
}
