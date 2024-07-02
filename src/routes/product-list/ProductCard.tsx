import { Link } from "wouter"

import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Flex, Button, Box } from "@mantine/core"

import { Product } from "../../types/product"
import { RemountOnThemeChange } from "../../components/RemountOnThemeChange"
import { useAtom } from "jotai"
import { $theme } from "../../store/theme"
import { ProductCardFooter } from "./ProductCardFooter"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [theme] = useAtom($theme)
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  const questionHeight = theme === "dark" ? 40 : 70

  return (
    <Link href={`/products/${product.id}`}>
      <Stack p="12px" className="card">
        <Stack gap={10}>
          <Flex>
            <Image
              src={image}
              className="w-full object-cover object-center aspect-square"
            />
          </Flex>

          <Stack className="smartscalar" mih={70} gap={0}>
            <Text
              fz="18px"
              fw={300}
              className="truncate"
              truncate="end"
              w="200px"
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
