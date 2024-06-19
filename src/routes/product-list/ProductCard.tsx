import { Stack, Box, Checkbox, Text, Image, Flex, Divider } from "@mantine/core"
import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Link } from "wouter"

import { Product } from "../../types/product"

import "./product-card.css"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="text-white border border-[#4C4A48]" p="12px">
        <Flex className="space-x-2">
          <Checkbox
            size="xs"
            variant="outline"
            color="violet"
            classNames={{ input: "bg-transparent cursor-pointer rounded-none" }}
          />

          <Text size="14px" truncate="end" fw={600}>
            {product.category.name}
          </Text>
        </Flex>

        <Box>
          <Text size="sm" truncate="end">
            {product.title}
          </Text>
        </Box>

        <Stack gap={0}>
          <Flex>
            <Image
              src={image}
              className="w-full object-cover object-center aspect-square"
            />
          </Flex>

          <Divider color="#4C4A48" mt="15px" />

          <Box className="text-white product-card-question-container" mih={70}>
            <StaticQuestion
              questionId={94}
              showVisualizationSelector={false}
              height={80}
            />
          </Box>

          <Divider color="#4C4A48" mb="10px" />

          <Flex w="100%" justify="center" align="center">
            <Text fw="500" c="#FF8000" fz="14px">
              See more
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Link>
  )
}
