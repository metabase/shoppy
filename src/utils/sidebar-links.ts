import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"

import { getCategoryList } from "./query-category"

import { SidebarNewQuestion } from "../components/SidebarNewQuestion"

import { SidebarLink } from "../types/sidebar-link"
import { createDashboardIdAtom } from "../store/create"
import { useMemo } from "react"

export function useSidebarLinks(): SidebarLink[] {
  const categoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryList,
  })

  const [, setDashboardId] = useAtom(createDashboardIdAtom)

  return useMemo(() => {
    const categories = categoryQuery.data ?? []

    const categoryLinks: SidebarLink[] = categories.map((category) => ({
      title: category.name,
      to: `/admin/categories/${category.id}`,
    }))

    return [
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
          { key: "analytics-divider", isDivider: true, hideOnMobile: true },
          {
            key: "new-question",
            component: SidebarNewQuestion,
            hideOnMobile: true,
          },
          {
            to: "/admin/analytics/new/dashboard",
            title: "New Dashboard",
            onClick: () => setDashboardId(null),
            hideOnMobile: true,
          },
        ],
        defaultOpened: true,
      },
    ]
  }, [categoryQuery, setDashboardId])
}
