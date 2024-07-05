import { Flex, Text, Loader } from "@mantine/core"
import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

export const MetabaseLoader = () => {
  const [theme] = useAtom(siteAtom)

  return (
    <Flex
      h="100%"
      align="center"
      {...(theme === "stitch"
        ? { ml: "8px", justify: "flex-start" }
        : { justify: "center" })}
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
