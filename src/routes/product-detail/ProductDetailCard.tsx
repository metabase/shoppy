import { Flex, Box, Text, Image } from "@mantine/core"

export const ProductDetailCard = () => (
  <Flex direction="column" mih="100%" className="space-y-8 text-white" pt={38}>
    <Box className="space-y-2 p-3 border border-[#7173AD] rounded-md w-full">
      <Text>outdoor</Text>

      <Image src="/mock-t-shirt.webp" maw={250} />
    </Box>

    <Flex direction="column" className="space-y-4" p="md">
      <Flex>
        <Text fw={900} size="md" lh="xs" lts={2}>
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
  </Flex>
)
