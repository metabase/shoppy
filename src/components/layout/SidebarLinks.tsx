import { Box, NavLink } from "@mantine/core"
import { Link } from "wouter"
import cx from "classnames"

interface SidebarLink {
  to: string
  title: string
  children?: SidebarLink[]
}

const links: SidebarLink[] = [
  { to: "/admin/products", title: "PRODUCTS" },
  {
    to: "#",
    title: "ANALYTICS",
    children: [
      { to: "/admin/analytics", title: "Overview" },
      { to: "/admin/analytics/17", title: "Inventory Performance" },
      { to: "/admin/analytics/custom", title: "Custom" },
    ],
  },
  { to: "/admin/orders", title: "ORDERS" },
  { to: "/admin/campaigns", title: "CAMPAIGNS" },
  { to: "/logout", title: "LOGOUT" },
]

export function SidebarLinks() {
  return (
    <Box className="text-gray-400 space-y-2" py="lg" pl="lg">
      {links.map((link) => LinkRenderer(link))}
    </Box>
  )
}

const LinkRenderer = (link: SidebarLink, child?: boolean) => (
  <NavLink
    label={link.title}
    lts={0.5}
    p={3}
    variant="subtle"
    key={link.to}
    href={link.to}
    renderRoot={(props) => (
      <Link
        {...props}
        className={(active) =>
          cx(
            "hover:bg-transparent",
            props.className,
            active ? "text-[#FF8002]" : "hover:text-gray-300",
          )
        }
      />
    )}
  >
    {link.children && link.children.map((link) => LinkRenderer(link, true))}
  </NavLink>
)
