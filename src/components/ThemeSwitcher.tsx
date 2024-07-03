import { Flex, Image, Text, ButtonGroup, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"
import cx from "classnames"
import { useMutation } from "@tanstack/react-query"

import { $theme } from "../store/theme"

import { THEMES } from "../themes"
import { loginToSite } from "../utils/switch-site"
import { ThemeKey } from "../types/theme"

export const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useAtom($theme)

  const loginMutation = useMutation({
    mutationFn: loginToSite,
    mutationKey: ["login"],
  })

  async function changeTheme(key: ThemeKey) {
    await loginMutation.mutateAsync(key)
    setActiveTheme(key)
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
        <Text fz="14px" pr="md" c="#BFC1C1">
          Switch to different test sites
        </Text>

        <ButtonGroup variant="outline">
          {THEMES.map((theme) => {
            const active = activeTheme === theme.key

            return (
              <Button
                key={theme.key}
                variant="outline"
                size="xs"
                color={active ? "#2B2F32" : "#7AC1FF"}
                bg={active ? "#EAEAEA" : undefined}
                className={cx(
                  "border-[#EAEAEA]",
                  !active && "!bg-transparent hover:!bg-[#4C4E51]",
                )}
                onClick={() => changeTheme(theme.key)}
                leftSection={
                  <Icon icon={theme.icon} fontSize={14} overflow="visible" />
                }
                loading={loginMutation.isPending}
              >
                {theme.title}
              </Button>
            )
          })}
        </ButtonGroup>
      </Flex>
    </Flex>
  )
}
