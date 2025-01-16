import { Box } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import { useReloadOnSiteChange } from "../../utils/use-site-changed"

interface Props {
  id: string
}

export function DashboardPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  // When the site changed, reload to apply the site's sandboxed data.
  useReloadOnSiteChange()

  return (
    <Box mih="100vh" className="dashboard-container smartscalar" pt="30px">
      <InteractiveDashboard
        dashboardId={dashboardId}
        withTitle
        withDownloads={false}
      />
    </Box>
  )
}
