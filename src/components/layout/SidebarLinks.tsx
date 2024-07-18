import cx from "classnames"
import { Link } from "wouter"
import { useMemo } from "react"
import { Box, NavLink } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { getCategoryList } from "../../utils/query-category"
import { getSidebarLinks } from "../../utils/sidebar-links"
import { SidebarLink } from "../../types/sidebar-link"

export function SidebarLinks() {
  const categoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryList,
  })

  const links = useMemo(() => {
    return getSidebarLinks({ categories: categoryQuery.data ?? [] })
  }, [categoryQuery.data])

  return (
    <Box pt="32px" className="space-y-3">
      {links.map((link) => renderLink(link))}
    </Box>
  )
}

const renderLink = (link: SidebarLink, child?: boolean) => (
  <NavLink
    label={link.title}
    p={3}
    fz="14px"
    variant="subtle"
    key={link.to ?? link.title}
    href={link.to ?? "#!"}
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
            !child && "sidebar-link-root",
            child && "space-y-2",
            child && !active && "sidebar-inactive-child",
            active && "sidebar-active-child dark-gradient",
          )
        }
      />
    )}
    defaultOpened={link.defaultOpened}
  >
    {link.children && link.children.map((link) => renderLink(link, true))}
  </NavLink>
)
