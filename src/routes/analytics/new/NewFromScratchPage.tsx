import { Container } from "@mantine/core"
import {
  InteractiveQuestion,
  MetabotQuestion,
} from "@metabase/embedding-sdk-react"

import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"
import { useAtom } from "jotai"
import { shouldShowMetabotAtom } from "../../../store/metabot"

export const NewFromScratchPage = () => {
  const { collectionId, onSaveQuestion } = useCreateQuestionHelpers()
  const [shouldShowMetabot] = useAtom(shouldShowMetabotAtom)

  console.log({ shouldShowMetabot })
  return (
    <Container w="100%">
      {shouldShowMetabot ? (
        <MetabotQuestion />
      ) : (
        <InteractiveQuestion
          questionId="new"
          onSave={onSaveQuestion}
          targetCollection={collectionId}
          isSaveEnabled
        />
      )}
    </Container>
  )
}
