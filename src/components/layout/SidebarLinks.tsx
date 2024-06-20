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
    <Box className="text-white space-y-2" py="lg" pl="lg">
      {links.map((link) => renderLink(link))}
    </Box>
  )
}

const renderLink = (link: SidebarLink, child?: boolean) => (
  <NavLink
    label={link.title}
    lts={0.5}
    p={3}
    fw={600}
    fz="14px"
    variant="subtle"
    key={link.to ?? link.title}
    href={link.to ?? "#!"}
    classNames={{ children: "space-y-1" }}
    renderRoot={(props) => (
      <Link
        {...props}
        className={(active) =>
          cx(
            "hover:bg-transparent",
            props.className,
            child && "space-y-2",
            child && !active && "text-light-grey",
            active ? "text-primary" : "hover:text-gray-300",
          )
        }
      />
    )}
  >
    {link.children && link.children.map((link) => renderLink(link, true))}
  </NavLink>
)
