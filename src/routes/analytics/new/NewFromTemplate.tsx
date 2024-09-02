import { Flex, Stack, Title } from "@mantine/core"
import {
  CollectionBrowser,
  ModifyQuestion,
} from "@metabase/embedding-sdk-react"
import { useState } from "react"

export const NewFromTemplate = () => {
  const [selectedQuestionId, setQuestionId] = useState<number | null>(null)

  if (selectedQuestionId === null) {
    return (
      <Stack w="100%">
        <Title fz="28px">Pick a question</Title>

        <CollectionBrowser
          collectionId={0}
          visibleEntityTypes={["question"]}
          onClick={(item) => setQuestionId(item.id)}
        />
      </Stack>
    )
  }

  if (selectedQuestionId !== null) {
    return (
      <Flex w="100%">
        <ModifyQuestion questionId={selectedQuestionId} />
      </Flex>
    )
  }

  return null
}
