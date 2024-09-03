import { useAtom } from "jotai"
import { Box } from "@mantine/core"
import { useEffect, useRef } from "react"
import { InteractiveDashboard } from "@metabase/embedding-sdk-react"

import { siteAtom } from "../../store/site"
import { SiteKey } from "../../types/site"

interface Props {
  id: string
}

export function DashboardPage(props: Props) {
  const dashboardId = parseInt(props.id, 10)

  const [site] = useAtom(siteAtom)
  const initialSiteRef = useRef<SiteKey>()

  useEffect(() => {
    if (!initialSiteRef.current) {
      initialSiteRef.current = site
    } else if (site !== initialSiteRef.current) {
      // When the site changes, reload to apply the site's sandboxed data.
      window.location.reload()
    }
  }, [site])

  return (
    <Box mih="100vh" className="dashboard-container smartscalar">
      <InteractiveDashboard dashboardId={dashboardId} withTitle withDownloads />
    </Box>
  )
}
