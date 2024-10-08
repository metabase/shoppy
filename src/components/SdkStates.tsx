import { type ReactNode } from "react"
import { useAtom } from "jotai"
import { Flex, Text, Loader } from "@mantine/core"

import { siteAtom } from "../store/site"

export const MetabaseLoader = () => {
  const [site] = useAtom(siteAtom)

  return (
    <Flex
      h="100%"
      align="center"
      {...(site === "stitch"
        ? { ml: "8px", justify: "flex-start" }
        : { justify: "center" })}
    >
      <Loader size="sm" />
    </Flex>
  )
}

export const MetabaseError = ({ message }: { message: ReactNode }) => {
  return (
    <Flex>
      <Text>{message}</Text>
    </Flex>
  )
}
