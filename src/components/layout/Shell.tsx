import { AppShell, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"

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
      bg="#4c5773"
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
        <Link to="/admin/products">
          <Text fw={900} size="lg" c="#98D9D9" lh="xs" lts={2}>
            SHOPPY
          </Text>
        </Link>

        <SidebarLinks />
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}
