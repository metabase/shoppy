import { Box, Text } from "@mantine/core"
import { Link } from "wouter"

interface Link {
  to: string
  title: string
}

const links: Link[] = [
  { to: "/admin/products", title: "PRODUCTS" },
  { to: "/admin/analytics", title: "ANALYTICS" },
  { to: "/admin/orders", title: "ORDERS" },
  { to: "/admin/campaigns", title: "CAMPAIGNS" },
]

export function SidebarLinks() {
  return (
    <Box className="text-white" py="xs">
      {links.map((link) => (
        <Link
          href={link.to}
          className={(active) => (active ? "text-[#98D9D9]" : "")}
        >
          <Text lts={0.5}>{link.title}</Text>
        </Link>
      ))}
    </Box>
  )
}
