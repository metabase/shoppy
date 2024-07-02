import { Flex, Text, Loader } from "@mantine/core"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

export const MetabaseLoader = () => {
  const [theme] = useAtom($theme)

  if (theme === "dark") {
    return (
      <Flex align="center" justify="flex-start" h="100%" ml="8px">
        <Loader size="sm" />
      </Flex>
    )
  }

  return (
    <Flex align="center" justify="center" h="100%">
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
