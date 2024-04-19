import { Stack, Box, Select, Text, Image } from "@mantine/core"
import { InteractiveQuestion } from "@metabase/embedding-sdk-react"

export const ProductCard = () => (
  <Stack>
    <Box>
      <Select />
      <Text>Keepwarm base layer</Text>
    </Box>

    <Box>
      <Text>Category</Text>
    </Box>

    <Box>
      <Image src="" />
    </Box>

    <Box>
      <InteractiveQuestion questionId={15} />
    </Box>
  </Stack>
)
