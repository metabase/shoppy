import { Grid } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

export const AnalyticsPage = () => {
  return (
    <Grid justify="flex-start" align="stretch">
      <InteractiveQuestion questionId={97} />
    </Grid>
  )
}
