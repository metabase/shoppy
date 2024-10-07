import { Flex, Text, ButtonGroup, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"
import cx from "classnames"
import { useMutation } from "@tanstack/react-query"

import { siteAtom } from "../store/site"
import { switchSite } from "../utils/switch-site"

import { SITES } from "../constants/sites"

import { SiteKey } from "../types/site"

export const SiteSwitcher = () => {
  const [currentSite, setCurrentSite] = useAtom(siteAtom)

  const switchSiteMutation = useMutation({
    mutationFn: switchSite,
    mutationKey: ["login"],
  })

  async function changeSite(key: SiteKey) {
    await switchSiteMutation.mutateAsync(key)
    setCurrentSite(key)
  }

  return (
    <Flex align="center" justify="space-between" w="100%" ff="Lato">
      <Text fz="14px" pr="md" c="#BFC1C1" className="hidden sm:block">
        Switch to different test shops
      </Text>

      <ButtonGroup variant="outline">
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
              )}
              onClick={() => changeSite(site.key)}
              leftSection={
                <Icon icon={site.icon} fontSize={14} overflow="visible" />
              }
              loading={switchSiteMutation.isPending}
            >
              {site.title}
            </Button>
          )
        })}
      </ButtonGroup>
    </Flex>
  )
}
