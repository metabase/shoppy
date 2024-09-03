import { Container, Title } from "@mantine/core"
import {
  CollectionBrowser,
  ModifyQuestion,
} from "@metabase/embedding-sdk-react"
import { useAtom } from "jotai"
import { templateQuestionIdAtom } from "../../../store/create"
import { QUESTION_TEMPLATE_COLLECTION_ID } from "../../../constants/collections"

export const NewFromTemplatePage = () => {
  const [templateQuestionId, setQuestionId] = useAtom(templateQuestionIdAtom)

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
        <ModifyQuestion questionId={templateQuestionId} />
      </Container>
    )
  }

  return null
}
