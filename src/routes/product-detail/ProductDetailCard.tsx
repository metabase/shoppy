import { Flex, Box, Text, Image, Stack } from "@mantine/core"

import { Product } from "../../types/product"

interface Props {
  product: Product
}

export const ProductDetailCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Flex
      direction="column"
      mih="100%"
      className="text-light-grey product-detail-card-container"
    >
      <Box className="mb-4 space-y-1">
        <Text size="23px" className="product-detail-title" truncate="end">
          {product.title}
        </Text>

        <Text fw={300} fz="14px">
          {product.category.name}
        </Text>
      </Box>

      <Stack className="product-detail-card w-full space-y-8" gap={1}>
        <Flex align="center">
          <Image src={image} className="product-detail-image" />
        </Flex>

        <Flex direction="column" className="space-y-4">
          <Flex>
            <Text fw={700} size="md">
              Details
            </Text>

            <Flex />
          </Flex>

          <Box maw={200}>
            <Flex>
              <Text w="100%" c="light-grey">
                material
              </Text>
              <Text>cotton</Text>
            </Flex>

            <Flex>
              <Text w="100%" c="light-grey">
                manufacturer
              </Text>
              <Text>hering</Text>
            </Flex>

            <Flex>
              <Text w="100%" c="light-grey">
                price
              </Text>
              <Text>$23.99</Text>
            </Flex>

            <Flex>
              <Text w="100%" c="light-grey">
                discount
              </Text>
              <Text>$4.00</Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  )
}
