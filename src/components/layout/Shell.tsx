import {
  AppShell,
  Box,
  Flex,
  Image,
  Burger,
  Stack,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { usePathname } from "wouter/use-browser-location"
import { useSearch } from "wouter"

import { SidebarLinks } from "./SidebarLinks"

import { SiteSwitcher } from "../SiteSwitcher"
import { SiteLogo } from "../SiteLogo"

import { ThemedButton } from "../ThemedButton"
import { NewQuestionMenu } from "../NewQuestionMenu"
import { siteIsReloadingAtom } from "../../store/site"
import { useAtom } from "jotai"
import { FullPageLoader } from "../Loader"
import { SiteFooter } from "../SiteFooter"
import { ClickActionDemoModal } from "../ClickActionDemoModal"
import { LinkWithSearchParams } from "../LinkWithSearchParams"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  const [isMobileNavOpen, { toggle: toggleMobileNav, close: closeMobileNav }] =
    useDisclosure()

  const [isSiteReloading] = useAtom(siteIsReloadingAtom)

  const path = usePathname()
  const search = useSearch()
  const isMetabotLayout = path.includes("/analytics/new/ask-metabot")

  function getMainContentLayout() {
    if (isMetabotLayout) {
      return props.children
    }

    return (
      <Stack h="100%" py="xl">
        <Box className="flex-1">{props.children}</Box>

        <SiteFooter />
      </Stack>
    )
  }

  if (isSiteReloading) {
    return <FullPageLoader />
  }

  return (
    <AppShell
      header={{
        height: {
          sm: 44,
          base: isMobileNavOpen ? 107 : 44,
        },
      }}
      navbar={{
        width: 304,
        breakpoint: "sm",
        collapsed: { mobile: !isMobileNavOpen },
      }}
      padding="sm"
      classNames={{
        navbar: "navbar overflow-scroll sm:overflow-visible",
        main: isMetabotLayout ? "app-shell-remove-padding" : "",
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
          ff="Lato, sans-serif"
        >
          <a
            href="https://www.metabase.com/?utm_source=referral&utm_medium=banner&utm_campaign=shoppy-demo"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/assets/metabase-logo-with-wordmark.svg" />
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
        withBorder={false}
        pt="xl"
        pb="24px"
        px="24px"
        // Required for the "New Dashboard" modal to be on top of the mobile navbar.
        zIndex={2}
      >
        <Flex
          direction="column"
          justify="space-between"
          h="100%"
          className="py-4 md:py-0"
          style={{ minHeight: 0 }}
        >
          <Box style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
            <LinkWithSearchParams href="/admin/products">
              <SiteLogo />
            </LinkWithSearchParams>

            <SidebarLinks
              onLinkClick={(link) => {
                if (!link.children) {
                  closeMobileNav()
                }
              }}
            />
          </Box>

          <Stack className="hide-on-mobile sidebar-create-section" mt="24px" style={{ flexShrink: 0 }}>
            <NewQuestionMenu position="top-start" prefix="/admin">
              <ThemedButton className="sidebar-action-button" size="sm">
                New custom exploration
              </ThemedButton>
            </NewQuestionMenu>

            <ThemedButton
              className="sidebar-action-button sidebar-action-button-secondary"
              size="sm"
              component="a"
              href={`/admin/analytics/new/dashboard${search ? `?${search}` : ""}`}
            >
              New dashboard
            </ThemedButton>
          </Stack>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main h="100dvh">
        {getMainContentLayout()}

        <ClickActionDemoModal />
      </AppShell.Main>
    </AppShell>
  )
}
