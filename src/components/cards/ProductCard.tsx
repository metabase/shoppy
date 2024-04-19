import cx from "classnames"

import { Stack, Box, Checkbox, Text, Image, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Link } from "wouter"

import "../../styles/product-card.css"

interface Props {
  id: number
  className?: string
}

export const ProductCard = ({ id, className }: Props) => {
  return (
    <Link href={`/products/${id}`}>
      <Stack
        className={cx(
          "text-white border border-[#7173AD] rounded-md",
          className,
        )}
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
          <Image src="/mock-t-shirt.webp" className="w-full" />
        </Box>

        <Box className="text-white min-h-[70px] product-card-question-container">
          <StaticQuestion questionId={89} showVisualizationSelector={false} />
        </Box>
      </Stack>
    </Link>
  )
}
