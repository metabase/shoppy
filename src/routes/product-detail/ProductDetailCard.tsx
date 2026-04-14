import { Flex, Box, Text, Image, Stack } from "@mantine/core"
import { useAtom } from "jotai"

import { Product } from "../../types/product"
import { siteAtom } from "../../store/site"

interface Props {
  product: Product
}

export const ProductDetailCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/assets/mock-t-shirt.webp"
  const [siteKey] = useAtom(siteAtom)

  const descriptionLabel =
    siteKey === "proficiency" ? "Course description" : "Product description"

  return (
    <Flex
      direction="column"
      mih="100%"
      className="text-light-grey product-detail-card-container"
    >
      <Stack className="product-detail-card w-full space-y-8" gap={1}>
        <Flex align="center" className="product-detail-image-container">
          <Image src={image} className="product-detail-image" flex={1} />
        </Flex>

        <Flex direction="column" className="space-y-2">
          <Flex>
            <Text fw={700} size="md">
              {descriptionLabel}
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
