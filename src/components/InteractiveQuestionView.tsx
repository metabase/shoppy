import { Box } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

export const InteractiveQuestionView = () => {
  return (
    <Box h="500px">
      <Box>Foo Bar</Box>
      <InteractiveQuestion.QuestionVisualization />
    </Box>
  )
}
