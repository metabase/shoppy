import { Flex, Image, Text, ButtonGroup, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"
import cx from "classnames"
import { useMutation } from "@tanstack/react-query"

import { siteAtom } from "../store/site"
import { loginToSite } from "../utils/switch-site"

import { SITES } from "../constants/sites"

import { SiteKey } from "../types/site"

export const SiteSwitcher = () => {
  const [currentSite, setCurrentSite] = useAtom(siteAtom)

  const loginMutation = useMutation({
    mutationFn: loginToSite,
    mutationKey: ["login"],
  })

  async function changeSite(key: SiteKey) {
    await loginMutation.mutateAsync(key)
    setCurrentSite(key)
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      bg="#2B2F32"
      h="44px"
      w="100%"
      px="16px"
      className="border-transparent"
      ff="Lato"
    >
      <Image src="/metabase-logo-with-wordmark.svg" />

      <Flex align="center">
        <Text fz="14px" pr="md" c="#BFC1C1" className="hidden sm:block">
          Switch to different test sites
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
                loading={loginMutation.isPending}
              >
                {site.title}
              </Button>
            )
          })}
        </ButtonGroup>
      </Flex>
    </Flex>
  )
}
