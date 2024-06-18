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
      className="space-y-8 text-white"
      pt={38}
    >
      <Box>
        <Text fw={700} fz="23px" c="white" className="truncate">
          {product.title}
        </Text>

        <Text fw={700} fz="14px" c="#CBE2F7">
          {product.category.name}
        </Text>
      </Box>

      <Stack className="space-y-2 p-3 border border-[#4C4A48] rounded-md w-full">
        <Image
          src={image}
          maw={250}
          className="object-cover object-center aspect-square"
        />

        <Flex direction="column" className="space-y-4" p="md">
          <Flex>
            <Text fw={700} size="md" lh="xs" lts={2}>
              DETAILS
            </Text>

            <Flex />
          </Flex>

          <Box maw={200}>
            <Flex>
              <Text w="100%">material</Text>
              <Text>cotton</Text>
            </Flex>

            <Flex>
              <Text w="100%">manufacturer</Text>
              <Text>hering</Text>
            </Flex>

            <Flex>
              <Text w="100%">price</Text>
              <Text>$23.99</Text>
            </Flex>

            <Flex>
              <Text w="100%">discount</Text>
              <Text>$4.00</Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  )
}
