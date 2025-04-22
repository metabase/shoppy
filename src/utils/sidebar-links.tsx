import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"

import { getCategoryList } from "./query-category"

import { SidebarLink } from "../types/sidebar-link"
import { createDashboardIdAtom } from "../store/create"
import { siteAtom } from "../store/site"
import { CustomIcon } from "../components/CustomIcon"
import { Box, Divider } from "@mantine/core"

const PROFICIENCY_CATEGORY_ICONS: Record<string, string> = {
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
      icons: { proficiency: PROFICIENCY_CATEGORY_ICONS[category.name] },
    }))

    return [
      {
        title: "Products",
        children: [
          {
            to: "/admin/products",
            title: "All products",
            icons: { proficiency: "iconoir:report-columns" },
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
        key: "proficiency-divider",
      },
      {
        title: "Analytics",
        children: [
          {
            to: "/admin/analytics",
            title: "Dashboards",

            icons: {
              proficiency: () => (
                <CustomIcon
                  icon="dashboard"
                  fill="rgba(106, 87, 201, 0.75)"
                  size={14}
                />
              ),
            },
          },
          {
            to: "/admin/analytics/iKJzPC_18vCTmb0mH8gsT",
            title: "Inventory performance",
            icons: {
              proficiency: () => (
                <CustomIcon
                  icon="bar"
                  fill="rgba(106, 87, 201, 0.75)"
                  size={14}
                />
              ),
            },
          },
          {
            to: "/admin/analytics/custom",
            title: "Saved explorations",
            icons: {
              proficiency: () => (
                <CustomIcon
                  icon="insight"
                  fill="rgba(106, 87, 201, 0.75)"
                  size={14}
                />
              ),
            },
          },
        ],
        defaultOpened: true,
      },
    ]
  }, [categoryQuery, setDashboardId])
}
