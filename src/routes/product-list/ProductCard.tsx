import { Link } from "wouter"

import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Flex, Box } from "@mantine/core"
import { useAtom } from "jotai"

import { ProductCardFooter } from "./ProductCardFooter"

import { Product } from "../../types/product"
import { RemountOnThemeChange } from "../../components/RemountOnThemeChange"
import { $theme } from "../../store/theme"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [theme] = useAtom($theme)
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  const questionHeight = theme === "stitch" ? 40 : 70

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="product-card" maw="300px">
        <Stack gap={10}>
          <Image
            src={image}
            className="product-card-image w-full object-cover object-center aspect-square"
          />

          <Stack className="smartscalar" mih={70} gap={0}>
            <Text
              className="truncate product-card-title"
              truncate="end"
              pl="8px"
            >
              {product.title}
            </Text>

            <Box py={4} mih={questionHeight}>
              <RemountOnThemeChange>
                <StaticQuestion
                  questionId={94}
                  showVisualizationSelector={false}
                  height={questionHeight}
                />
              </RemountOnThemeChange>
            </Box>

            <ProductCardFooter />
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
