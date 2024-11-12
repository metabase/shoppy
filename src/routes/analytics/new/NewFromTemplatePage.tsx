import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"
import { useAtom } from "jotai"
import { selectedQuestionTemplateIdAtom } from "../../../store/create"
import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"
import { InteractiveQuestionView } from "../../../components/InteractiveQuestionView"
import { useCreateQuestion } from "../../../utils/use-create-question"

export const NewFromTemplatePage = () => {
  const { collectionId, closeSaveModal } = useCreateQuestion()

  const [templateOrQuestionId, setQuestionId] = useAtom(
    selectedQuestionTemplateIdAtom,
  )

  if (templateOrQuestionId === undefined) {
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

  if (templateOrQuestionId !== undefined) {
    return (
      <Container w="100%">
        <InteractiveQuestion
          questionId={templateOrQuestionId}
          onSave={(question) => {
            closeSaveModal()

            // After saving the question, go to the created question id.
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
