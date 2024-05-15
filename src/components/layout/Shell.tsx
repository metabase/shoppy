import { AppShell, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { SidebarLinks } from "./SidebarLinks"
import { Link } from "wouter"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [opened] = useDisclosure()

  return (
    <AppShell
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      bg="#4c5773"
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
        <Link to="/admin/products">
          <Text fw={900} size="lg" c="#98D9D9" lh="xs" lts={2}>
            CUSTOMER <br /> ZERO
          </Text>
        </Link>

        <SidebarLinks />
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}
