import { Box, Flex, Group } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { ThemedButton } from "./ThemedButton"
import { CustomIcon } from "./CustomIcon"

export const InteractiveQuestionView = () => {
  return (
    <Box h="500px">
      <Flex w="100%" justify="space-between" pb={14}>
        <Group gap="xs">
          <InteractiveQuestion.BackButton />

          <InteractiveQuestion.Title />
        </Group>

        <Group gap="xs">
          <ThemedButton
            size="compact-sm"
            leftSection={<CustomIcon icon="filter" />}
          >
            Add a filter
          </ThemedButton>

          <ThemedButton
            size="compact-sm"
            leftSection={<CustomIcon icon="sum" />}
          >
            Change the summary
          </ThemedButton>

          <ThemedButton
            size="compact-sm"
            leftSection={<CustomIcon icon="sum" />}
          >
            Change the breakout
          </ThemedButton>

          <ThemedButton size="compact-sm">
            <CustomIcon icon="notebook" />
          </ThemedButton>
        </Group>
      </Flex>

      <InteractiveQuestion.QuestionVisualization />
    </Box>
  )
}
