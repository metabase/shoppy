import { Link } from "wouter"

import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Box } from "@mantine/core"
import { useAtom } from "jotai"

import { ProductCardFooter } from "./ProductCardFooter"

import { Product } from "../../types/product"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { siteAtom } from "../../store/site"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [site] = useAtom(siteAtom)
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  const questionHeight = site === "stitch" ? 40 : 70

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
              <RemountOnSiteChange>
                <StaticQuestion
                  questionId={94}
                  showVisualizationSelector={false}
                  height={questionHeight}
                />
              </RemountOnSiteChange>
            </Box>

            <ProductCardFooter />
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
