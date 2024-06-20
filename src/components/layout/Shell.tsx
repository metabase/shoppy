import { AppShell, Box, Flex, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"
import { IconUser, IconSettings } from "@tabler/icons-react"

import { SidebarLinks } from "./SidebarLinks"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [opened] = useDisclosure()

  return (
    <AppShell
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="sm"
      bg="dark-background"
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
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

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}
