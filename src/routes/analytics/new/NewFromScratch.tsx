import { Flex } from "@mantine/core"
import { CreateQuestion } from "@metabase/embedding-sdk-react"

export const NewFromScratch = () => {
  return (
    <Flex w="100%">
      <CreateQuestion />
    </Flex>
  )
}
