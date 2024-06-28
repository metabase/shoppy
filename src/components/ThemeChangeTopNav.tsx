import { Flex, Image, Text, ButtonGroup, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"
import cx from "classnames"

import { $theme } from "../store/theme"

import { THEMES } from "../themes"

export const ThemeChangeTopNav = () => {
  const [activeTheme, setActiveTheme] = useAtom($theme)

  return (
    <Flex
      justify="space-between"
      align="center"
      bg="#2B2F32"
      h="44px"
      w="100%"
      px="16px"
      className="border-transparent"
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
                onClick={() => setActiveTheme(theme.key)}
                leftSection={
                  <Icon icon={theme.icon} fontSize={14} overflow="visible" />
                }
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
