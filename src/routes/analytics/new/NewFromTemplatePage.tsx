import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"
import { useAtom } from "jotai"
import { templateOrSavedQuestionIdAtom } from "../../../store/create"
import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"
import { InteractiveQuestionView } from "../../../components/InteractiveQuestionView"
import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

export const NewFromTemplatePage = () => {
  const { collectionId, closeSaveModal } = useCreateQuestionHelpers()

  const [templateOrSavedQuestionId, setQuestionId] = useAtom(
    templateOrSavedQuestionIdAtom,
  )

  if (templateOrSavedQuestionId === undefined) {
    return (
      <Container>
        <Title fz="28px" mb="md">
          Pick a question
        </Title>

        <CollectionBrowser
          collectionId={QUESTION_TEMPLATE_COLLECTION_ID}
          visibleEntityTypes={["question"]}
          onClick={(item) => setQuestionId(item.id)}
        />
      </Container>
    )
  }

  if (templateOrSavedQuestionId !== undefined) {
    return (
      <Container w="100%">
        <InteractiveQuestion
          questionId={templateOrSavedQuestionId}
          onSave={(question) => {
            closeSaveModal()

            // After saving the question, go to the newly created question.
            setQuestionId(question.id())
          }}
          saveToCollectionId={collectionId}
          isSaveEnabled
        >
          <InteractiveQuestionView isSaveEnabled />
        </InteractiveQuestion>
      </Container>
    )
  }

  return null
}
