import cx from "classnames"
import { Link } from "wouter"
import { Box, Flex, NavLink } from "@mantine/core"
import { Icon } from "@iconify/react"

import type { SidebarLink } from "../../types/sidebar-link"
import { useSidebarLinks } from "../../utils/sidebar-links"
import { ReactNode } from "react"
import { useAtomValue } from "jotai"
import { siteAtom } from "../../store/site"
import { SiteKey } from "../../types/site"

interface SidebarLinkProps {
  onLinkClick?: (link: SidebarLink) => void
}

export function SidebarLinks({ onLinkClick }: SidebarLinkProps) {
  const links = useSidebarLinks()
  const site = useAtomValue(siteAtom)

  return (
    <Box pt="20px" className="sidebar-links-container">
      {links.map((link) => renderLink(link, { onLinkClick, site }))}
    </Box>
  )
}

const renderLink = (
  link: SidebarLink,
  context: {
    isChild?: boolean
    onLinkClick?: (link: SidebarLink) => void
    site?: SiteKey
  },
) => {
  const { isChild, onLinkClick, site } = context ?? {}

  function renderIcon(): ReactNode {
    const icon = site && link.icons?.[site]

    if (!icon) {
      return null
    }

    if (typeof icon === "string") {
      return <Icon icon={icon} />
    }

    const NavbarIcon = icon

    return <NavbarIcon />
  }

  if (link.component) {
    return <link.component key={link.key} />
  }

  // Do not allow toggling site navigation sections on ProficiencyLabs
  const isNavToggleEnabled = site !== "proficiency"
  const iconElement = renderIcon()

  return (
    <NavLink
      opened={isNavToggleEnabled ? undefined : true}
      label={
        <Flex align="center" columnGap="6px" className="sidebar-link-label">
          {iconElement && (
            <Box className="sidebar-link-icon">{iconElement}</Box>
          )}

          <Box className="sidebar-link-title">{link.title}</Box>
        </Flex>
      }
      p={3}
      fz="14px"
      variant="subtle"
      key={link.to ?? link.title ?? link.key}
      href={link.to ?? "#!"}
      onClick={() => {
        link.onClick?.()
        onLinkClick?.(link)
      }}
      classNames={{
        chevron: "sidebar-link-chevron",
        children: "sidebar-link-children-container space-y-1",
        body: cx(
          "flex-[2]",

          // do not show cursor pointer on non-toggleable nav headers
          link.children && !isNavToggleEnabled && "cursor-default",
        ),
        section: "flex-[1]",
      }}
      renderRoot={(props) => (
        <Link
          {...props}
          className={(active) =>
            cx(
              "hover:bg-transparent font-sans",
              props.className,
              !isChild && "sidebar-link-parent",
              isChild && "sidebar-child-container space-y-2",
              isChild && !active && "sidebar-inactive-child",
              active && "sidebar-active-child dark-gradient",
              link.hideOnMobile && "hide-on-mobile",
            )
          }
        />
      )}
      defaultOpened={link.defaultOpened}
    >
      {link.children &&
        link.children.map((link) =>
          renderLink(link, { isChild: true, onLinkClick, site }),
        )}
    </NavLink>
  )
}
