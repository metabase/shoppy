import { AppShell, Box, Flex, Image, Burger } from "@mantine/core"
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
  const [isMobileNavOpen, { toggle: toggleMobileNav, close: closeMobileNav }] =
    useDisclosure()

  return (
    <Box>
      <AppShell
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: { mobile: !isMobileNavOpen },
        }}
        padding="sm"
        classNames={{
          navbar: "navbar overflow-scroll sm:overflow-visible",
        }}
      >
        <AppShell.Header className="border-b-[#55595B]" zIndex={102}>
          <Flex
            justify="space-between"
            align="center"
            bg="#2B2F32"
            h="44px"
            w="100%"
            px="16px"
            className="border-transparent"
            ff="Lato"
          >
            <Image src="/metabase-logo-with-wordmark.svg" />

            <Box className="md:hidden">
              <Burger
                opened={isMobileNavOpen}
                onClick={toggleMobileNav}
                aria-label="Toggle navigation"
                color="#eee"
              />
            </Box>

            <Box className="hidden md:block">
              <SiteSwitcher />
            </Box>
          </Flex>

          {isMobileNavOpen && (
            <Flex className="md:hidden" bg="#2B2F32" px="16px" pb="8px">
              <SiteSwitcher />
            </Flex>
          )}
        </AppShell.Header>

        <AppShell.Navbar
          p="md"
          withBorder={false}
          pt={107}
          pl="30px"
          zIndex={3}
        >
          <Flex
            direction="column"
            justify="space-between"
            h="100%"
            className="max-w-[320px] sm:px-8 md:px-0 py-4 md:py-0"
          >
            <Box>
              <Link to="/admin/products">
                <SiteLogo />
              </Link>

              <SidebarLinks onLinkClick={closeMobileNav} />
            </Box>

            <Flex className="sidebar-icons gap-x-3 py-4">
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
