import { AppShell, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      bg="#4C5773"
      padding="md"
    >
      <AppShell.Navbar p="md" bg="transparent" withBorder={false}>
        <Text fw={900} size="lg" c="#98D9D9" lh="xs" lts={2}>
          CUSTOMER <br /> ZERO
        </Text>
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  )
}
