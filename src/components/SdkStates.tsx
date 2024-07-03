import { Flex, Text, Loader } from "@mantine/core"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

export const MetabaseLoader = () => {
  const [theme] = useAtom($theme)

  return (
    <Flex
      h="100%"
      align="center"
      justify={theme === "stitch" ? "flex-start" : "center"}
      {...(theme === "stitch" && { ml: "8px" })}
    >
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
