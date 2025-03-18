import { useAtom } from "jotai"
import { Flex } from "@mantine/core"
import {
  CreateDashboardModal,
  EditableDashboard,
} from "@metabase/embedding-sdk-react"
import { navigate } from "wouter/use-browser-location"

import { RemountOnSiteChange } from "../../../components/RemountOnSiteChange"

import { siteAtom } from "../../../store/site"
import { createDashboardIdAtom } from "../../../store/create"

import { SANDBOXED_USER_GENERATED_COLLECTIONS } from "../../../constants/collections"

export const NewDashboardPage = () => {
  const [site] = useAtom(siteAtom)
  const [dashboardId, setDashboardId] = useAtom(createDashboardIdAtom)

  const collectionId = SANDBOXED_USER_GENERATED_COLLECTIONS[site]

  if (dashboardId === null) {
    return (
      <RemountOnSiteChange>
        <CreateDashboardModal
          onCreate={(dashboard: { id: number }) =>
            setDashboardId(dashboard.entity_id)
          }
          initialCollectionId={collectionId}
          onClose={() => navigate("/admin/analytics/custom")}
        />
      </RemountOnSiteChange>
    )
  }

  return (
    <Flex w="100%">
      <EditableDashboard dashboardId={dashboardId} />
    </Flex>
  )
}
