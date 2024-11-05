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
    }))

    return [
      {
        title: "Products",
        children: [
          { to: "/admin/products", title: "All products" },
          ...categoryLinks,
        ],
        defaultOpened: true,
      },
      {
        title: "Analytics",
        children: [
          { to: "/admin/analytics", title: "Dashboards" },
          { to: "/admin/analytics/17", title: "Inventory performance" },
          { to: "/admin/analytics/custom", title: "Saved explorations" },
        ],
        defaultOpened: true,
      },
    ]
  }, [categoryQuery, setDashboardId])
}
