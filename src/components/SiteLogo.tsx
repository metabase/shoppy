import { Text, Image } from "@mantine/core"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

export function SiteLogo() {
  const [theme] = useAtom($theme)

  if (theme === "luminara") {
    return <Image src="/logo-luminara.svg" />
  }

  if (theme === "pug") {
    return <Image src="/logo-pug-n-play.png" w="160px" />
  }

  if (theme === "stitch") {
    return (
      <Text
        fw={200}
        size="30px"
        lh="xs"
        className="dark-gradient"
        c="accent-lighter"
      >
        theStitch
      </Text>
    )
  }

  return null
}
