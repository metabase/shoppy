import { Flex, Box, Text, Image, Stack } from "@mantine/core"

import { Product } from "../../types/product"

interface Props {
  product: Product
}

export const ProductDetailCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Flex direction="column" mih="100%" className="text-white">
      <Box className="mb-4">
        <Text fw={700} fz="23px" c="white" className="truncate">
          {product.title}
        </Text>

        <Text fw={700} fz="14px" c="light-blue">
          {product.category.name}
        </Text>
      </Box>

      <Stack className="card w-full p-5 space-y-4" gap={1}>
        <Flex align="center">
          <Image
            src={image}
            maw={250}
            className="object-cover object-center aspect-square"
          />
        </Flex>

        <Flex direction="column" className="space-y-4">
          <Flex>
            <Text fw={700} size="md" lh="xs" lts={2}>
              DETAILS
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
