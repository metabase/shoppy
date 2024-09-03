import { useAtom } from "jotai"
import { Flex } from "@mantine/core"
import {
  CreateDashboardModal,
  EditableDashboard,
} from "@metabase/embedding-sdk-react"
import { RemountOnSiteChange } from "../../../components/RemountOnSiteChange"
import { createDashboardIdAtom } from "../../../store/create"
import { DASHBOARD_COLLECTION_ID } from "../../../constants/collections"

export const NewDashboardPage = () => {
  const [dashboardId, setDashboardId] = useAtom(createDashboardIdAtom)

  if (dashboardId === null) {
    return (
      <RemountOnSiteChange>
        <CreateDashboardModal
          onCreate={(dashboard) => setDashboardId(dashboard.id)}
          initialCollectionId={DASHBOARD_COLLECTION_ID}
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
