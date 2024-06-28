import { AppShell, Box, Flex, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"
import { IconUser, IconSettings } from "@tabler/icons-react"

import { SidebarLinks } from "./SidebarLinks"
import { ThemeChangeTopNav } from "../ThemeChangeTopNav"
import { UnmountOnThemeRefresh } from "../ThemeRefresh"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [opened] = useDisclosure()

  return (
    <Box>
      <AppShell
        navbar={{
          width: 240,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="sm"
        bg="background"
      >
        <AppShell.Header>
          <Flex>
            <ThemeChangeTopNav />
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md" bg="transparent" withBorder={false} pt={60}>
          <Flex direction="column" justify="space-between" h="100%">
            <Box>
              <Link to="/admin/products">
                <Text fw={400} size="30px" c="accent-lighter" lh="xs">
                  Shoppy
                </Text>
              </Link>

              <SidebarLinks />
            </Box>

            <Flex direction="column" className="gap-y-3">
              <IconUser size={30} className="stroke-dark-orange" />
              <IconSettings size={30} className="stroke-dark-orange" />
            </Flex>
          </Flex>
        </AppShell.Navbar>

        <AppShell.Main pt={60}>
          <UnmountOnThemeRefresh>{props.children}</UnmountOnThemeRefresh>
        </AppShell.Main>
      </AppShell>
    </Box>
  )
}
