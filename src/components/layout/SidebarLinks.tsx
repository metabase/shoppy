import cx from "classnames"
import { Link } from "wouter"
import { Box, Flex, NavLink } from "@mantine/core"
import { Icon } from "@iconify/react"

import type { SidebarLink } from "../../types/sidebar-link"
import { useSidebarLinks } from "../../utils/sidebar-links"
import { ReactNode } from "react"

interface SidebarLinkProps {
  onLinkClick?: (link: SidebarLink) => void
}

export function SidebarLinks({ onLinkClick }: SidebarLinkProps) {
  const links = useSidebarLinks()

  return (
    <Box pt="20px" className="sidebar-links-container">
      {links.map((link) => renderLink(link, { onLinkClick }))}
    </Box>
  )
}

const renderLink = (
  link: SidebarLink,
  context: { isChild?: boolean; onLinkClick?: (link: SidebarLink) => void },
) => {
  const { isChild, onLinkClick } = context ?? {}

  function renderIcon(): ReactNode {
    if (typeof link.icon === "string") {
      return <Icon icon={link.icon} />
    }

    if (!link.icon) {
      return null
    }

    const NavbarIcon = link.icon

    return <NavbarIcon />
  }

  if (link.component) {
    return <link.component />
  }

  return (
    <NavLink
      label={
        <Flex align="center" columnGap="6px" className="sidebar-link-label">
          <Box className="sidebar-link-icon">{renderIcon()}</Box>

          <Box>{link.title}</Box>
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
        body: "flex-[2]",
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
          renderLink(link, { isChild: true, onLinkClick }),
        )}
    </NavLink>
  )
}
