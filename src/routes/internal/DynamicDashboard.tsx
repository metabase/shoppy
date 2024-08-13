import { useState } from "react"
import { Box, Button } from "@mantine/core"
import type { Dashboard } from "@metabase/embedding-sdk-react"
import {
  DashboardCreateModal,
  EditableDashboard,
} from "@metabase/embedding-sdk-react"

export const DynamicDashboardPage = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [dashboard, setDashboard] = useState<Dashboard | null>(null)

  if (dashboard) {
    return <EditableDashboard dashboardId={dashboard.id} />
  }

  if (isShowModal) {
    return (
      <DashboardCreateModal
        onClose={() => setIsShowModal(false)}
        onCreate={setDashboard}
      />
    )
  }

  return (
    <Box p="md">
      <Button onClick={() => setIsShowModal(true)}>Create new dashboard</Button>
    </Box>
  )
}
