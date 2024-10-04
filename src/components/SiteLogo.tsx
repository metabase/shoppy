import { Text, Image } from "@mantine/core"
import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

export function SiteLogo() {
  const [site] = useAtom(siteAtom)

  if (site === "luminara") {
    return <Image src="/logo-luminara.svg" maw="200px" />
  }

  if (site === "pug") {
    return <Image src="/logo-pug-n-play.png" w="160px" />
  }

  if (site === "stitch") {
    return (
      <Text
        fw={200}
        size="36px"
        lh="36px"
        className="dark-gradient"
        c="accent-lighter"
      >
        theStitch
      </Text>
    )
  }

  return null
}
