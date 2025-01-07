import {
  AppShell,
  Box,
  Flex,
  Image,
  Burger,
  Stack,
  Divider,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"
import { Icon } from "@iconify/react"

import { SidebarLinks } from "./SidebarLinks"

import { SiteSwitcher } from "../SiteSwitcher"
import { SiteLogo } from "../SiteLogo"

import { ThemedButton } from "../ThemedButton"
import { NewQuestionMenu } from "../NewQuestionMenu"
import { siteIsReloadingAtom } from "../../store/site"
import { useAtom } from "jotai"
import { FullPageLoader } from "../Loader"
import { SiteFooter } from "../SiteFooter"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [isMobileNavOpen, { toggle: toggleMobileNav, close: closeMobileNav }] =
    useDisclosure()

  const [isSiteReloading] = useAtom(siteIsReloadingAtom)

  if (isSiteReloading) {
    return <FullPageLoader />
  }

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
        <AppShell.Header zIndex={102} bg="#2B2F32" className="border-none">
          <Flex
            justify="space-between"
            align="center"
            h="44px"
            w="100%"
            px="16px"
            className="border-transparent"
            ff="Lato"
          >
            <a
              href="https://www.metabase.com/?utm_source=referral&utm_medium=banner&utm_campaign=shoppy-demo"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/metabase-logo-with-wordmark.svg" />
            </a>

            <Burger
              display={{ sm: "none" }}
              opened={isMobileNavOpen}
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
              color="#eee"
            />

            <Box className="hide-on-mobile">
              <SiteSwitcher />
            </Box>
          </Flex>

          {isMobileNavOpen && (
            <Flex display={{ sm: "none" }} bg="#2B2F32" px="16px" py="8px">
              <SiteSwitcher />
            </Flex>
          )}
        </AppShell.Header>

        <AppShell.Navbar
          p="md"
          withBorder={false}
          pt={107}
          pl="30px"
          // Required for the "New Dashboard" modal to be on top of the mobile navbar.
          zIndex={2}
        >
          <Flex
            direction="column"
            justify="space-between"
            h="100%"
            className="py-4 md:py-0"
          >
            <Box>
              <Link to="/admin/products">
                <SiteLogo />
              </Link>

              <SidebarLinks
                onLinkClick={(link) => {
                  if (!link.children) {
                    closeMobileNav()
                  }
                }}
              />

              <Divider
                orientation="horizontal"
                className="acme-sidebar-divider show-only-on-acme my-4"
              />

              <Stack className="hide-on-mobile sidebar-create-section" pt={18}>
                <NewQuestionMenu position="bottom-start" prefix="/admin">
                  <ThemedButton className="sidebar-action-button" size="sm">
                    New custom exploration
                  </ThemedButton>
                </NewQuestionMenu>

                <Link to="/admin/analytics/new/dashboard">
                  <ThemedButton className="sidebar-action-button">
                    New dashboard
                  </ThemedButton>
                </Link>
              </Stack>
            </Box>

            <Flex className="sidebar-icons gap-x-3 py-4">
              <Icon icon="tabler:user" fontSize={30} />
              <Icon icon="tabler:settings" fontSize={30} />
            </Flex>
          </Flex>
        </AppShell.Navbar>

        <AppShell.Main pt="90px">
          {props.children}

          <SiteFooter />
        </AppShell.Main>
      </AppShell>
    </Box>
  )
}
