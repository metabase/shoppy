import { SidebarNewQuestion } from "../components/SidebarNewQuestion"

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
      defaultOpened: true,
    },
    {
      title: "Analytics",
      children: [
        { to: "/admin/analytics", title: "Overview" },
        { to: "/admin/analytics/17", title: "Inventory" },
        { to: "/admin/analytics/custom", title: "Custom" },
        { to: "#!", title: "New", component: SidebarNewQuestion },
      ],
      defaultOpened: true,
    },
    { to: "/admin/orders", title: "Orders" },
    { to: "/admin/campaigns", title: "Campaigns" },
  ]

  return SIDEBAR_LINKS
}
