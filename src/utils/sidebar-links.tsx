import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"

import { getCategoryList } from "./query-category"

import { SidebarLink } from "../types/sidebar-link"
import { createDashboardIdAtom } from "../store/create"
import { siteAtom } from "../store/site"
import { CustomIcon } from "../components/CustomIcon"
import { Box, Divider } from "@mantine/core"

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
        component: () => (
          <Box className="show-only-on-proficiency py-3">
            <Divider
              orientation="horizontal"
              className="proficiency-sidebar-divider"
            />
          </Box>
        ),
      },
      {
        title: "Analytics",
        children: [
          {
            to: "/admin/analytics",
            title: "Dashboards",
            icon: () => <img src="/icon-dashboard.svg" />,
          },
          {
            to: "/admin/analytics/17",
            title: "Inventory performance",
            icon: () => <img src="/icon-bar.svg" />,
          },
          {
            to: "/admin/analytics/custom",
            title: "Saved explorations",
            icon: () => (
              <CustomIcon
                icon="insight"
                fill="rgba(106, 87, 201, 0.75)"
                size={14}
              />
            ),
          },
        ],
        defaultOpened: true,
      },
    ]
  }, [categoryQuery, setDashboardId])
}
