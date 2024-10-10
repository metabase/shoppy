import { Box } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import { useSiteChanged } from "../../utils/use-site-changed"

interface Props {
  id: string
}

export function DashboardPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  // When the site changed, reload to apply the site's sandboxed data.
  useSiteChanged(() => window.location.reload())

  return (
    <Box mih="100vh" className="dashboard-container smartscalar">
      <InteractiveDashboard
        dashboardId={dashboardId}
        withTitle
        withDownloads={false}
      />
    </Box>
  )
}
