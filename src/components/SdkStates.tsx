import { Flex, Text, Loader } from "@mantine/core"

export const MetabaseLoader = () => {
  return (
    <Flex align="center" justify="center">
      <Loader size="sm" />
    </Flex>
  )
}

export const MetabaseError = ({ message }: { message: string }) => {
  return (
    <Flex>
      <Text>{message}</Text>
    </Flex>
  )
}
