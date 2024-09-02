import { Box } from "@mantine/core"

import { NewQuestionMenu } from "./NewQuestionMenu"

export const SidebarNewQuestion = () => {
  return (
    <NewQuestionMenu position="bottom-start" prefix="/admin">
      <Box fz="sm" py={2}>
        New
      </Box>
    </NewQuestionMenu>
  )
}
