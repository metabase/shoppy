import { Container } from "@mantine/core"
import { MetabotQuestion } from "@metabase/embedding-sdk-react"

export const NewAskMetabotPage = () => {
  return (
    <Container w="100%">
      <MetabotQuestion />
    </Container>
  )
}
