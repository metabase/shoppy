import { Flex, Loader } from "@mantine/core"

export function FullPageLoader() {
  return (
    <Flex align="center" justify="center" w="100%" mih="100vh">
      <Loader />
    </Flex>
  )
}
