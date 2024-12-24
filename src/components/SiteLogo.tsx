import { Text, Image, Flex, Divider, Box } from "@mantine/core"
import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

export function SiteLogo() {
  const [site] = useAtom(siteAtom)

  if (site === "acme") {
    return (
      <Box>
        <Flex justify="flex-start" align="center" pb="20px">
          <Image src="/logo-acme.svg" maw="40px" mr="8px" />

          <Text fz="28px" lh="28px" fw={700}>
            Acme Co.
          </Text>
        </Flex>

        <Divider orientation="horizontal" className="logo-divider" />
      </Box>
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
