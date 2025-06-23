import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"
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
      <Container>
        <Title fz="28px" mb="md">
          Pick a question
        </Title>

        <CollectionBrowser
          collectionId={QUESTION_TEMPLATE_COLLECTION_ID}
          visibleEntityTypes={["question"]}
          onClick={(item) => setQuestionId(item.entity_id)}
        />
      </Container>
    )
  }

  if (templateOrSavedQuestionId !== undefined) {
    return (
      <Container w="100%">
        <InteractiveQuestion
          onSave={onSaveQuestion}
          targetCollection={collectionId}
          questionId={templateOrSavedQuestionId}
          entityTypeFilter={["model", "question"]}
          isSaveEnabled
        />
      </Container>
    )
  }

  return null
}
