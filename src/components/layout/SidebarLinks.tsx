import cx from "classnames"
import { Link } from "wouter"
import { Box, Divider, NavLink } from "@mantine/core"

import { SidebarLink } from "../../types/sidebar-link"
import { useSidebarLinks } from "../../utils/sidebar-links"

interface SidebarLinkProps {
  onLinkClick?: () => void
}

export function SidebarLinks({ onLinkClick }: SidebarLinkProps) {
  const links = useSidebarLinks()

  return (
    <Box pt="32px" className="space-y-3">
      {links.map((link) => renderLink(link, { onLinkClick }))}
    </Box>
  )
}

const renderLink = (
  link: SidebarLink,
  context: { isChild?: boolean; onLinkClick?: () => void },
) => {
  const { component: Component } = link
  const { isChild, onLinkClick } = context ?? {}

  if (link.isDivider) {
    return (
      <Divider
        color="var(--color-lighter-grey)"
        w="140px"
        my="14px"
        key={link.key}
      />
    )
  }

  return (
    <NavLink
      label={Component ? <Component /> : link.title}
      p={3}
      fz="14px"
      variant="subtle"
      key={link.to ?? link.title ?? link.key}
      href={link.to ?? "#!"}
      onClick={() => {
        link.onClick?.()

        // Closes the mobile menu when a link is clicked.
        onLinkClick?.()
      }}
      classNames={{
        children: "space-y-1",
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
              !isChild && "sidebar-link-root",
              isChild && "space-y-2",
              isChild && !active && "sidebar-inactive-child",
              active && "sidebar-active-child dark-gradient",
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
