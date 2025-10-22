import { Flex, Box, Text, Image, Stack } from "@mantine/core"

import { Product } from "../../types/product"

interface Props {
  product: Product
}

export const ProductDetailCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/assets/mock-t-shirt.webp"

  return (
    <Flex
      direction="column"
      mih="100%"
      className="text-light-grey product-detail-card-container"
    >
      <Stack className="product-detail-card w-full space-y-8" gap={1}>
        <Flex align="center">
          <Image src={image} className="product-detail-image" flex={1} />
        </Flex>

        <Flex direction="column" className="space-y-4">
          <Flex>
            <Text fw={700} size="md">
              Details
            </Text>

            <Flex />
          </Flex>

          <Box>
            <Text>{product.description}</Text>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  )
}
