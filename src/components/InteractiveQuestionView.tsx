import { Box, Flex, Group } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { ThemedButton } from "./ThemedButton"
import { CustomIcon } from "./CustomIcon"
import { useState } from "react"

// TODO: add the "breakout" view once we've separated the breakout from summarization in the SDK
type QuestionView = "viz" | "filter" | "summary" | "editor"

interface Props {
  isSaveEnabled?: boolean
}

export const InteractiveQuestionView = (props: Props) => {
  const { isSaveEnabled = false } = props

  const [view, setView] = useState<QuestionView>("viz")

  const changeView = (nextView: QuestionView) => {
    if (view !== "viz" && view === nextView) {
      setView("viz")
      return
    }

    setView(nextView)
  }

  return (
    <Box>
      <Flex w="100%" justify="space-between" pb={14}>
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
            <ThemedButton
              size="compact-sm"
              onClick={() => changeView("summary")}
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
          <InteractiveQuestion.FilterBar />
          <InteractiveQuestion.QuestionVisualization />
        </Box>
      )}

      {view === "filter" && <InteractiveQuestion.Filter />}

      {view === "summary" && <InteractiveQuestion.Summarize />}

      {view === "editor" && <InteractiveQuestion.Editor />}
    </Box>
  )
}
