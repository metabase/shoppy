import { Link } from "wouter"

import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Box } from "@mantine/core"
import { useAtom } from "jotai"

import { ProductCardFooter } from "./ProductCardFooter"

import { Product } from "../../types/product"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { siteAtom } from "../../store/site"
import { truncate } from "../../utils/truncate"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [site] = useAtom(siteAtom)
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  const questionHeight = site === "stitch" ? 40 : 70

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="product-card">
        <Stack gap={10}>
          <Image src={image} className="product-card-image w-full" />

          <Stack className="smartscalar product-card-trend" mih={70} gap={0}>
            <Text className="product-card-title" pl="8px">
              {truncate(product.title, 13)}
            </Text>

            <Box py={4} mih={questionHeight}>
              <RemountOnSiteChange>
                <StaticQuestion
                  questionId={161}
                  showVisualizationSelector={false}
                  height={questionHeight}
                  parameterValues={{ product_id: product.id }}
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
