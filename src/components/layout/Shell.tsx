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
import { Icon } from "@iconify/react"
import { usePathname } from "wouter/use-browser-location"

import { SidebarLinks } from "./SidebarLinks"

import { SiteSwitcher } from "../SiteSwitcher"
import { SiteLogo } from "../SiteLogo"

import { ThemedButton } from "../ThemedButton"
import { NewQuestionMenu } from "../NewQuestionMenu"
import { siteIsReloadingAtom } from "../../store/site"
import { useAtom } from "jotai"
import { FullPageLoader } from "../Loader"
import { SiteFooter } from "../SiteFooter"
import { ProficiencyGradient } from "../ProficiencyGradient"
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
  const isMetabotLayout = path.endsWith("/ask-metabot")

  function getMainContentLayout() {
    // For Metabot layout, hide the gradient and footer.
    if (isMetabotLayout) {
      return props.children
    }

    return (
      <>
        <ProficiencyGradient />

        <Stack h="100%" py="xl">
          <Box className="flex-1">{props.children}</Box>

          <SiteFooter />
        </Stack>
      </>
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
        width: 250,
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
        withBorder={false}
        pt="xl"
        px="24px"
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
            <LinkWithSearchParams href="/admin/products">
              <SiteLogo />
            </LinkWithSearchParams>

            <Divider
              orientation="horizontal"
              className="proficiency-sidebar-divider show-only-on-proficiency"
            />

            <SidebarLinks
              onLinkClick={(link) => {
                if (!link.children) {
                  closeMobileNav()
                }
              }}
            />

            <Divider
              orientation="horizontal"
              className="proficiency-sidebar-divider show-only-on-proficiency my-4"
            />

            <Stack className="hide-on-mobile sidebar-create-section" pt={18}>
              <NewQuestionMenu position="bottom-start" prefix="/admin">
                <ThemedButton className="sidebar-action-button" size="sm">
                  New custom exploration
                </ThemedButton>
              </NewQuestionMenu>

              <LinkWithSearchParams href="/admin/analytics/new/dashboard">
                <ThemedButton className="sidebar-action-button">
                  New dashboard
                </ThemedButton>
              </LinkWithSearchParams>
            </Stack>
          </Box>

          <Flex className="sidebar-icons gap-x-3 py-4">
            <Icon icon="tabler:user" fontSize={30} />
            <Icon icon="tabler:settings" fontSize={30} />
          </Flex>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main h="100dvh">
        {getMainContentLayout()}

        <ClickActionDemoModal />
      </AppShell.Main>
    </AppShell>
  )
}
