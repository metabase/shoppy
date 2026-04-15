import { Box } from "@mantine/core"
import { EditableDashboard } from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { withProductClickAction } from "../../utils/metabase-plugins"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../constants/data-picker"

interface Props {
  entity_id: string
}

export function DashboardPage(props: Props) {
  return (
    <Box mih="85vh" className="dashboard-container smartscalar" h="100%">
      <RemountOnSiteChange>
      <EditableDashboard
        dashboardId={props.entity_id}
        withTitle
        withDownloads
        plugins={{ mapQuestionClickActions: withProductClickAction() }}
        drillThroughQuestionProps={{
          height: "85vh",
          entityTypes: DATA_PICKER_ALLOWED_ENTITY_TYPES,
        }}
      />
      </RemountOnSiteChange>
    </Box>
  )
}
