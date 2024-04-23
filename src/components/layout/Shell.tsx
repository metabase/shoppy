import { AppShell, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { SidebarLinks } from "./SidebarLinks"

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
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
        <Text fw={900} size="lg" c="#98D9D9" lh="xs" lts={2}>
          CUSTOMER <br /> ZERO
        </Text>

        <SidebarLinks />
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}