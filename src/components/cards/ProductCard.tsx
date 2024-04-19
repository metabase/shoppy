import cx from "classnames"

import { Stack, Box, Checkbox, Text, Image, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"

interface Props {
  id: number
  className?: string
}

export const ProductCard = ({ id, className }: Props) => (
  <Stack
    className={cx("text-white border border-[#7173AD] rounded-md", className)}
    px="xs"
  >
    <Flex className="space-x-2 pt-2">
      <Checkbox
        size="xs"
        variant="outline"
        color="violet"
        classNames={{ input: "bg-transparent" }}
      />

      <Text size="xs">Keepwarm base layer</Text>
    </Flex>

    <Box>
      <Text size="sm">Shirt</Text>
    </Box>

    <Box>
      <Image src={`https://picsum.photos/seed/s${id}/500`} className="w-full" />
    </Box>

    <Box className="text-white min-h-[70px] text-xs">
      <StaticQuestion questionId={89} showVisualizationSelector={false} />
    </Box>
  </Stack>
)
