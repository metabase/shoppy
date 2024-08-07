import { AppShell, Box, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"

import { SidebarLinks } from "./SidebarLinks"
import { SiteSwitcher } from "../SiteSwitcher"
import { SiteLogo } from "../SiteLogo"
import { Icon } from "@iconify/react"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [opened] = useDisclosure()

  return (
    <Box>
      <AppShell
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="sm"
        classNames={{ navbar: "navbar" }}
      >
        <AppShell.Header className="border-b-[#55595B]" zIndex={102}>
          <SiteSwitcher />
        </AppShell.Header>

        <AppShell.Navbar p="md" withBorder={false} pt={107} pl="30px">
          <Flex direction="column" justify="space-between" h="100%">
            <Box>
              <Link to="/admin/products">
                <SiteLogo />
              </Link>

              <SidebarLinks />
            </Box>

            <Flex className="sidebar-icons gap-x-3">
              <Icon icon="tabler:user" fontSize={30} />
              <Icon icon="tabler:settings" fontSize={30} />
            </Flex>
          </Flex>
        </AppShell.Navbar>

        <AppShell.Main pt={90}>{props.children}</AppShell.Main>
      </AppShell>
    </Box>
  )
}
