import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"
import { useAtom } from "jotai"
import { selectedQuestionTemplateIdAtom } from "../../../store/create"
import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"
import { InteractiveQuestionView } from "../../../components/InteractiveQuestionView"

export const NewFromTemplatePage = () => {
  const [templateQuestionId, setQuestionId] = useAtom(
    selectedQuestionTemplateIdAtom,
  )

  if (templateQuestionId === null) {
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

  if (templateQuestionId !== null) {
    return (
      <Container w="100%">
        <InteractiveQuestion questionId={templateQuestionId} isSaveEnabled>
          <InteractiveQuestionView isSaveEnabled />
        </InteractiveQuestion>
      </Container>
    )
  }

  return null
}
