import { Box, Text, Button, Divider } from "@mantine/core"
import { useAtom } from "jotai"

import { $theme } from "../../store/theme"

export function ProductCardFooter() {
  const [theme] = useAtom($theme)

  if (theme === "light") {
    return (
      <Box w="100%">
        <Divider mx={16} className="divider" />

        <Text ta="center" fw={700} py={8} fz="14px">
          See more
        </Text>
      </Box>
    )
  }

  return (
    <Button w="fit-content" className="action-button" ml="8px" mt="xs">
      See more
    </Button>
  )
}
