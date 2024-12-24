import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"

import { getCategoryList } from "./query-category"

import { SidebarLink } from "../types/sidebar-link"
import { createDashboardIdAtom } from "../store/create"
import { siteAtom } from "../store/site"

const CATEGORY_ICONS: Record<string, string> = {
  "Leadership Training": "iconoir:leaderboard-star",
  "Technical Skills": "iconoir:code",
  "Soft Skills": "iconoir:people-tag",
  Compliance: "tabler:scale",
  "Health & Wellness": "iconoir:health-shield",
  Marketing: "iconoir:megaphone",
}

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
      icon: CATEGORY_ICONS[category.name],
    }))

    return [
      {
        title: "Products",
        children: [
          {
            to: "/admin/products",
            title: "All products",
            icon: "iconoir:report-columns",
          },
          ...categoryLinks,
        ],
        defaultOpened: true,
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
      },
    ]
  }, [categoryQuery, setDashboardId])
}
