import { useAtom } from "jotai"
import { useState } from "react"
import { Box, Flex, Group, Modal } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { ThemedButton } from "./ThemedButton"

import { isSaveModalOpenAtom } from "../store/save"

export const CreateQuestionView = () => {
  const [isVisualization, setIsVisualization] = useState(false)
  const [isSaveModalOpen, setSaveModalOpen] = useAtom(isSaveModalOpenAtom)

  const [isVisualizationButtonShown, setVisualizationButtonShown] =
    useState(false)

  const onApplyEditorChanges = () => {
    setIsVisualization(true)

    // Do not show the "show visualization/editor" button until the user has visualized the question.
    // This prevents users from seeing the "Question not found" indicator.
    if (!isVisualization) {
      setVisualizationButtonShown(true)
    }
  }

  return (
    <Box>
      <Flex
        w="100%"
        justify="space-between"
        pb={14}
        direction={{ base: "column", sm: "row" }}
        rowGap="sm"
      >
        <Group gap="xs">
          <InteractiveQuestion.Title />
        </Group>

        <Group gap="xs">
          {isVisualizationButtonShown && (
            <ThemedButton
              size="compact-sm"
              onClick={() => setIsVisualization(!isVisualization)}
            >
              Show {isVisualization ? "editor" : "visualization"}
            </ThemedButton>
          )}

          <ThemedButton
            size="compact-sm"
            onClick={() => setSaveModalOpen(true)}
          >
            Save
          </ThemedButton>

          <InteractiveQuestion.ResetButton />
        </Group>
      </Flex>

      {isVisualization && (
        <Box h="500px">
          <InteractiveQuestion.QuestionVisualization />
        </Box>
      )}

      {!isVisualization && (
        <InteractiveQuestion.Editor onApply={onApplyEditorChanges} />
      )}

      {isSaveModalOpen && (
        <Modal
          opened={isSaveModalOpen}
          onClose={() => setSaveModalOpen(false)}
          classNames={{ content: "bg-background" }}
          withCloseButton={false}
        >
          <Box bg="background">
            <InteractiveQuestion.SaveQuestionForm
              onClose={() => setSaveModalOpen(false)}
            />
          </Box>
        </Modal>
      )}
    </Box>
  )
}
