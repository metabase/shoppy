import { Box, Flex, Group, Modal } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { ThemedButton } from "./ThemedButton"
import { CustomIcon } from "./CustomIcon"
import { useReducer } from "react"
import { useDisclosure } from "@mantine/hooks"

// TODO: add the "breakout" view once we've separated the breakout from summarization in the SDK
type QuestionView = "viz" | "filter" | "summary" | "editor"

interface Props {
  isSaveEnabled?: boolean
}

export const InteractiveQuestionView = ({ isSaveEnabled = false }: Props) => {
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

  const [isSaveModalOpen, { open: openSaveModal, close: closeSaveModal }] =
    useDisclosure()

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
          <InteractiveQuestion.BackButton />

          <InteractiveQuestion.Title />
        </Group>

        <Group gap="xs">
          <ThemedButton
            size="compact-sm"
            leftSection={<CustomIcon icon="filter" />}
            onClick={() => changeView("filter")}
          >
            Add a filter
          </ThemedButton>

          <ThemedButton
            size="compact-sm"
            leftSection={<CustomIcon icon="sum" />}
            onClick={() => changeView("summary")}
          >
            Change the summary
          </ThemedButton>

          {isSaveEnabled && (
            <ThemedButton size="compact-sm" onClick={openSaveModal}>
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
          <InteractiveQuestion.FilterBar />
          <InteractiveQuestion.QuestionVisualization />
        </Box>
      )}

      {view === "filter" && (
        <InteractiveQuestion.Filter onClose={() => changeView("viz")} />
      )}

      {view === "summary" && (
        <InteractiveQuestion.Summarize onClose={() => changeView("viz")} />
      )}

      {view === "editor" && (
        <InteractiveQuestion.Editor onApply={() => changeView("viz")} />
      )}

      {isSaveModalOpen && (
        <Modal
          opened={isSaveModalOpen}
          onClose={closeSaveModal}
          classNames={{ content: "bg-background" }}
          withCloseButton={false}
        >
          <Box bg="background">
            <InteractiveQuestion.SaveQuestionForm onClose={closeSaveModal} />
          </Box>
        </Modal>
      )}
    </Box>
  )
}
