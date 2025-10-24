import { Box } from "@mantine/core"
import { EditableDashboard } from "@metabase/embedding-sdk-react"

import { useReloadOnSiteChange } from "../../utils/use-site-changed"
import { withProductClickAction } from "../../utils/metabase-plugins"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../constants/data-picker"

interface Props {
  entity_id: string
}

export function DashboardPage(props: Props) {
  // When the site changed, reload to apply the site's sandboxed data.
  useReloadOnSiteChange()

  return (
    <Box mih="100vh" className="dashboard-container smartscalar">
      <EditableDashboard
        dashboardId={props.entity_id}
        withTitle
        withDownloads
        plugins={{ mapQuestionClickActions: withProductClickAction() }}
        drillThroughQuestionProps={{
          height: "100%",
          entityTypes: DATA_PICKER_ALLOWED_ENTITY_TYPES,
        }}
      />
    </Box>
  )
}
