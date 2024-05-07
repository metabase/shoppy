import { Box, Text } from "@mantine/core"
import { Link } from "wouter"

interface SidebarLink {
  to: string
  title: string
}

const links: SidebarLink[] = [
  { to: "/admin/products", title: "PRODUCTS" },
  { to: "/admin/analytics", title: "ANALYTICS" },
  { to: "/admin/orders", title: "ORDERS" },
  { to: "/admin/campaigns", title: "CAMPAIGNS" },
  { to: "/admin/internal/kitchen-sink", title: "KITCHEN SINK" },
]

export function SidebarLinks() {
  return (
    <Box className="text-gray-400 space-y-2" py="lg" pl="lg">
      {links.map((link) => (
        <Box key={link.to}>
          <Link
            href={link.to}
            className={(active) => (active ? "text-[#98D9D9]" : "")}
          >
            <Text lts={0.5}>{link.title}</Text>
          </Link>
        </Box>
      ))}
    </Box>
  )
}
