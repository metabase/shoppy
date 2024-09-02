import { Container, Title } from "@mantine/core"
import { CreateQuestion } from "@metabase/embedding-sdk-react"

export const NewFromScratch = () => {
  return (
    <Container w="100%">
      <Title fz="28px" mb="md">
        Create a question
      </Title>

      <CreateQuestion />
    </Container>
  )
}
