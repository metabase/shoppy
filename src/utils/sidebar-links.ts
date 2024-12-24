import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"

import { getCategoryList } from "./query-category"

import { SidebarLink } from "../types/sidebar-link"
import { createDashboardIdAtom } from "../store/create"
import { siteAtom } from "../store/site"

export function useSidebarLinks(): SidebarLink[] {
  const site = useAtomValue(siteAtom)

  const categoryQuery = useQuery({
    queryKey: ["categories", site],
    queryFn: () => getCategoryList(site),
  })

  const [, setDashboardId] = useAtom(createDashboardIdAtom)

  return useMemo(() => {
    const categories = categoryQuery.data ?? []

    const categoryLinks: SidebarLink[] = categories.map((category) => ({
      title: category.name,
      to: `/admin/categories/${category.id}`,
      icon: "iconoir:folder",
    }))

    return [
      {
        title: "Products",
        children: [
          {
            to: "/admin/products",
            title: "All products",
            icon: "iconoir:leaderboard-star",
          },
          ...categoryLinks,
        ],
        defaultOpened: true,
        icon: "iconoir:view-grid",
      },
      {
        title: "Analytics",
        children: [
          {
            to: "/admin/analytics",
            title: "Dashboards",
            icon: "iconoir:database",
          },
          {
            to: "/admin/analytics/17",
            title: "Inventory performance",
            icon: "iconoir:database",
          },
          {
            to: "/admin/analytics/custom",
            title: "Saved explorations",
            icon: "iconoir:database",
          },
        ],
        defaultOpened: true,
        icon: "iconoir:graph-up",
      },
    ]
  }, [categoryQuery, setDashboardId])
}
