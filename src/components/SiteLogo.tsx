import { Text } from "@mantine/core"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

export function SiteLogo() {
  const [theme] = useAtom($theme)

  if (theme === "blue") {
    return <img src="/logo-pug-n-play.svg" />
  }

  if (theme === "dark") {
    return (
      <Text
        fw={200}
        size="30px"
        c="accent-lighter"
        lh="xs"
        className="dark-gradient"
      >
        theStitch
      </Text>
    )
  }

  return null
}
