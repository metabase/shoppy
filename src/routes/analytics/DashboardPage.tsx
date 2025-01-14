import { Box, Container } from "@mantine/core"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import { useReloadOnSiteChange } from "../../utils/use-site-changed"
import { InteractiveQuestionView } from "../../components/InteractiveQuestionView"

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
        renderDrillThroughQuestion={() => (
          <Container size="1000px" w="100%" pt="40px">
            <InteractiveQuestionView isSaveEnabled={false} />
          </Container>
        )}
      />
    </Box>
  )
}
