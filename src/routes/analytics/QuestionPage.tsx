import { Box } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

interface Props {
  id: string
}

export function QuestionPage(props: Props) {
  const questionId = parseInt(props.id, 10)

  return (
    <Box mih="100vh">
      <InteractiveQuestion questionId={questionId} />
    </Box>
  )
}
