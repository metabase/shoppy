import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"
import { InteractiveQuestionView } from "../../../components/InteractiveQuestionView"
import { useCreateQuestionHelpers } from "../../../utils/use-create-question-helpers"

export const NewFromTemplatePage = () => {
  const {
    collectionId,
    setQuestionId,
    onSaveQuestion,

    // Initially, this is the question id of the selected template question.
    // After the user made some changes and saved the question as a new question,
    // this then becomes the id of the newly created question.
    createdQuestionId: templateOrSavedQuestionId,
  } = useCreateQuestionHelpers()

  if (templateOrSavedQuestionId === undefined) {
    return (
      <Container pt="80px">
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
      <Container w="100%" pt="80px">
        <InteractiveQuestion
          onSave={onSaveQuestion}
          saveToCollectionId={collectionId}
          questionId={templateOrSavedQuestionId}
          isSaveEnabled
        >
          <InteractiveQuestionView isSaveEnabled />
        </InteractiveQuestion>
      </Container>
    )
  }

  return null
}
