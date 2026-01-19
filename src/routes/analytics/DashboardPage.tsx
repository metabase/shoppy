import { Box } from "@mantine/core"
import { EditableDashboard } from "@metabase/embedding-sdk-react"

import { useReloadOnSiteChange } from "../../utils/use-site-changed"
import { withProductClickAction } from "../../utils/metabase-plugins"
import { DATA_PICKER_ALLOWED_ENTITY_TYPES } from "../../constants/data-picker"
import { MetabaseDatadogLoadTimer } from "../../components/MetabaseDatadogLoadTimer"
import { overviewLinkCards } from "./link-cards"

interface Props {
  entity_id: string
}

export function DashboardPage(props: Props) {
  // When the site changed, reload to apply the site's sandboxed data.
  useReloadOnSiteChange()

  const enableMetricCollection = overviewLinkCards.some(
    (card) => card.entityId === props.entity_id,
  )

  return (
    <Box mih="85vh" className="dashboard-container smartscalar" h="100%">
      <MetabaseDatadogLoadTimer
        metricKey={`analytics_dashboard_${props.entity_id}`}
        enabled={enableMetricCollection}
      >
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
      </MetabaseDatadogLoadTimer>
    </Box>
  )
}
