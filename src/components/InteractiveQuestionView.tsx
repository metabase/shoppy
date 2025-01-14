import { useReducer } from "react"
import { useAtom } from "jotai"
import { Box, Flex, Group, Modal, Popover } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { CustomIcon } from "./CustomIcon"
import { ThemedButton } from "./ThemedButton"

import { isSaveModalOpenAtom } from "../store/save"

// TODO: add the "breakout" view once we've separated the breakout from summarization in the SDK
type QuestionView = "viz" | "filter" | "summary" | "editor"

interface Props {
  isSaveEnabled?: boolean
}

export const InteractiveQuestionView = ({ isSaveEnabled = false }: Props) => {
  const [isSaveModalOpen, setSaveModalOpen] = useAtom(isSaveModalOpenAtom)

  const [view, changeView] = useReducer(
    (view: QuestionView, nextView: QuestionView) => {
      // if we are clicking on the same view button,
      // switch back to the visualization view.
      if (view === nextView && view !== "viz") {
        return "viz"
      }

      return nextView
    },
    "viz",
  )

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
          <InteractiveQuestion.FilterDropdown />
          <InteractiveQuestion.SummarizeDropdown />

          {isSaveEnabled && (
            <ThemedButton
              size="compact-sm"
              onClick={() => setSaveModalOpen(true)}
            >
              Save
            </ThemedButton>
          )}

          <ThemedButton size="compact-sm" onClick={() => changeView("editor")}>
            <CustomIcon icon="notebook" />
          </ThemedButton>
        </Group>
      </Flex>

      {view === "viz" && (
        <Box h="500px">
          <InteractiveQuestion.QuestionVisualization />
        </Box>
      )}

      {view === "editor" && (
        <InteractiveQuestion.Editor onApply={() => changeView("viz")} />
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
              onCancel={() => setSaveModalOpen(false)}
            />
          </Box>
        </Modal>
      )}
    </Box>
  )
}
