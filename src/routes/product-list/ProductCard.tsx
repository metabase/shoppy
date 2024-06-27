import { Link } from "wouter"
import { IconDots } from "@tabler/icons-react"
import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"
import { Stack, Box, Checkbox, Text, Image, Flex, Divider } from "@mantine/core"

import { Product } from "../../types/product"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="text-white border border-dark-grey" p="12px">
        <Box>
          <Flex w="100%" justify="space-between" align="center">
            <Flex className="space-x-2">
              <Checkbox
                size="xs"
                variant="outline"
                color="violet"
                classNames={{
                  input: "bg-transparent cursor-pointer rounded-none",
                }}
              />

              <Text size="14px" truncate="end" fw={600} w="12vw">
                {product.title}
              </Text>
            </Flex>

            <Flex className="hidden lg:flex">
              <IconDots stroke={2} fill="lighter-grey" />
            </Flex>
          </Flex>

          <Box>
            <Text size="sm" truncate="end" fw={400} c="light-grey">
              {product.category.name}
            </Text>
          </Box>
        </Box>

        <Stack gap={0}>
          <Flex>
            <Image
              src={image}
              className="w-full object-cover object-center aspect-square"
            />
          </Flex>

          <Divider color="dark-grey" mt="15px" />

          <Flex
            align="center"
            justify="center"
            className="text-white smartscalar"
            mih={70}
          >
            <InteractiveQuestion
              questionId={94}
              showVisualizationSelector={false}
              height={80}
            />
          </Flex>

          <Divider color="dark-grey" mb="10px" />

          <Flex w="100%" justify="center" align="center">
            <Text fw="500" c="primary" fz="14px">
              See more
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Link>
  )
}
