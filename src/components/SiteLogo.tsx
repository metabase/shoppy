import { Text, Image, Flex } from "@mantine/core"
import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

export function SiteLogo() {
  const [site] = useAtom(siteAtom)

  if (site === "proficiency") {
    return (
      <Flex justify="flex-start" align="center" mb="20px">
        <Image src="/logo-proficiency.svg" maw="40px" mr="8px" />

        <Text fz="21px" lh="21px" fw={700}>
          ProficiencyLabs
        </Text>
      </Flex>
    )
  }

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
