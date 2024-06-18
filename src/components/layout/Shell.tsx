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
      bg="#212121"
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
        <Link to="/admin/products">
          <Text fw={400} size="28px" c="#FFEDDB" lh="xs" lts={2}>
            Shoppy
          </Text>
        </Link>

        <SidebarLinks />
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}
