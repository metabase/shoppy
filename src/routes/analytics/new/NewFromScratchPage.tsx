import { useAtom } from "jotai"
import { Container } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { createQuestionIdAtom } from "../../../store/create"
import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

import { CreateQuestionView } from "../../../components/CreateQuestionView"

export const NewFromScratchPage = () => {
  const { collectionId, closeSaveModal } = useCreateQuestionHelpers()

  const [questionId, setQuestionId] = useAtom(createQuestionIdAtom)

  return (
    <Container w="100%">
      <InteractiveQuestion
        questionId={questionId}
        onSave={(question) => {
          closeSaveModal()
          setQuestionId(question.id())
        }}
        saveToCollectionId={collectionId}
        isSaveEnabled
      >
        <CreateQuestionView />
      </InteractiveQuestion>
    </Container>
  )
}
