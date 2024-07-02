import { AppShell, Box, Flex, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"
import { IconUser, IconSettings } from "@tabler/icons-react"

import { SidebarLinks } from "./SidebarLinks"
import { ThemeSwitcher } from "../ThemeSwitcher"
import { SiteLogo } from "../SiteLogo"

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
        classNames={{ navbar: "navbar" }}
      >
        <AppShell.Header className="border-b-[#55595B]" zIndex={102}>
          <ThemeSwitcher />
        </AppShell.Header>

        <AppShell.Navbar p="md" withBorder={false} pt={70} pl="30px">
          <Flex direction="column" justify="space-between" h="100%">
            <Box>
              <Link to="/admin/products">
                <SiteLogo />
              </Link>

              <SidebarLinks />
            </Box>

            <Flex className="gap-x-3">
              <IconUser size={30} />
              <IconSettings size={30} />
            </Flex>
          </Flex>
        </AppShell.Navbar>

        <AppShell.Main pt={60}>{props.children}</AppShell.Main>
      </AppShell>
    </Box>
  )
}
