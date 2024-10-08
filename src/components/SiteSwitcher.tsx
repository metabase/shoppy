import { Flex, Text, ButtonGroup, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"
import cx from "classnames"

import { siteAtom } from "../store/site"

import { SITES } from "../constants/sites"

export const SiteSwitcher = () => {
  const [currentSite, setCurrentSite] = useAtom(siteAtom)

  return (
    <Flex align="center" justify="space-between" w="100%" ff="Lato">
      <Text fz="14px" pr="md" c="#BFC1C1" className="hide-on-mobile">
        Switch to different test shops
      </Text>

      <ButtonGroup variant="outline" w={{ base: "100%", sm: "auto" }}>
        {SITES.map((site) => {
          const active = currentSite === site.key

          return (
            <Button
              key={site.key}
              variant="outline"
              size="xs"
              color={active ? "#2B2F32" : "#7AC1FF"}
              bg={active ? "#EAEAEA" : undefined}
              className={cx(
                "border-[#EAEAEA]",
                !active && "!bg-transparent hover:!bg-[#4C4E51]",

                // Workaround to address Mantine's bug where the leftmost button's border radius is not applied,
                // which is caused by Mantine prepending a <style> tag, breaking the :first-child selector.
                "full-width-on-mobile",
              )}
              onClick={() => setCurrentSite(site.key)}
              leftSection={
                <Icon icon={site.icon} fontSize={14} overflow="visible" />
              }
            >
              {site.title}
            </Button>
          )
        })}
      </ButtonGroup>
    </Flex>
  )
}
