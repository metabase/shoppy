import { Box, Flex, Group, Modal } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

import { ThemedButton } from "./ThemedButton"
import { useDisclosure } from "@mantine/hooks"
import { useAtom } from "jotai"
import { isSaveModalOpenAtom } from "../store/save"

export const CreateQuestionView = () => {
  const [isVisualization, { toggle }] = useDisclosure(false)
  const [isSaveModalOpen, setSaveModalOpen] = useAtom(isSaveModalOpenAtom)

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
          <ThemedButton size="compact-sm" onClick={toggle}>
            Show {isVisualization ? "editor" : "visualization"}
          </ThemedButton>

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
          <InteractiveQuestion.FilterBar />
          <InteractiveQuestion.QuestionVisualization />
        </Box>
      )}

      {!isVisualization && <InteractiveQuestion.Editor onApply={toggle} />}

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
