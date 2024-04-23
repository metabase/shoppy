import { Stack, Box, Checkbox, Text, Image, Flex } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Link } from "wouter"
import { Product } from "../../types/product"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="text-white border border-[#7173AD] rounded-md" px="xs">
        <Flex className="space-x-2 pt-2">
          <Checkbox
            size="xs"
            variant="outline"
            color="violet"
            classNames={{ input: "bg-transparent" }}
          />

          <Text size="xs" truncate="end">
            {product.category.name}
          </Text>
        </Flex>

        <Box>
          <Text size="sm" truncate="end">
            {product.title}
          </Text>
        </Box>

        <Box>
          <Image
            src={image}
            className="w-full object-cover object-center aspect-square"
          />
        </Box>

        <Box className="text-white min-h-[70px] product-card-question-container">
          <StaticQuestion questionId={89} showVisualizationSelector={false} />
        </Box>
      </Stack>
    </Link>
  )
}
