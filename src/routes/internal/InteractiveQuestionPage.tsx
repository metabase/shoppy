import { Box, Flex, Stack } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import "./kitchen-sink.css"

export const InteractiveQuestionPage = () => (
  <Box w="100%" h="500px" data-testid="interactive-question-root">
    <InteractiveQuestion questionId={106} withTitle={true} />
  </Box>
)
