import { Container, Title } from "@mantine/core"
import { CreateQuestion } from "@metabase/embedding-sdk-react"
import { useAtom } from "jotai"
import { createQuestionKeyAtom } from "../../../store/create"
import { InteractiveQuestionView } from "../../../components/InteractiveQuestionView"

export const NewFromScratchPage = () => {
  const [questionKey] = useAtom(createQuestionKeyAtom)

  return (
    <Container w="100%">
      <Title fz="28px" mb="md">
        Create a question
      </Title>

      <CreateQuestion key={questionKey}>
        <InteractiveQuestionView />
      </CreateQuestion>
    </Container>
  )
}
