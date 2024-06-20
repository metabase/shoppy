import { Category } from "../types/category"
import { SidebarLink } from "../types/sidebar-link"

interface Options {
  categories: Category[]
}

export function getSidebarLinks(options: Options): SidebarLink[] {
  const categoryLinks: SidebarLink[] = options.categories.map((category) => ({
    title: category.name,
    to: `/admin/categories/${category.id}`,
  }))

  const SIDEBAR_LINKS: SidebarLink[] = [
    {
      title: "Products",
      children: [
        { to: "/admin/products", title: "Overview" },
        ...categoryLinks,
      ],
    },
    {
      title: "Analytics",
      children: [
        { to: "/admin/analytics", title: "Overview" },
        { to: "/admin/analytics/17", title: "Inventory Performance" },
        { to: "/admin/analytics/custom", title: "Custom" },
      ],
    },
    { to: "/admin/orders", title: "Orders" },
    { to: "/admin/campaigns", title: "Campaigns" },
    { to: "/logout", title: "Logout" },
  ]

  return SIDEBAR_LINKS
}
