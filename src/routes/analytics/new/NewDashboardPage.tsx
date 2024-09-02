import { Flex } from "@mantine/core"
import {
  CreateDashboardModal,
  EditableDashboard,
} from "@metabase/embedding-sdk-react"
import { useState } from "react"
import { RemountOnSiteChange } from "../../../components/RemountOnSiteChange"

export const NewDashboardPage = () => {
  const [dashboardId, setDashboardId] = useState<number | null>(null)

  if (dashboardId === null) {
    return (
      <RemountOnSiteChange>
        <CreateDashboardModal
          onCreate={(dashboard) => setDashboardId(dashboard.id)}
          initialCollectionId={43}
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
