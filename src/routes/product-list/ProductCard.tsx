import { StaticQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Box } from "@mantine/core"
import { useAtom } from "jotai"

import { ProductCardFooter } from "./ProductCardFooter"

import { Product } from "../../types/product"
import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { siteAtom } from "../../store/site"
import { truncate } from "../../utils/truncate"
import { LoadWhenVisible } from "../../components/LoadWhenVisible"
import { LinkWithSearchParams } from "../../components/LinkWithSearchParams"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [site] = useAtom(siteAtom)
  const image = product.imageUrl ?? "/assets/mock-t-shirt.webp"

  const questionHeight = site === "stitch" ? 40 : 70
  const truncateLength = site === "pug" ? 13 : 50

  return (
    <LinkWithSearchParams href={`/products/${product.id}`}>
      <Stack className="product-card">
        <Stack gap={10}>
          <Box w="100%" className="product-card-image-container">
            <Image
              src={image}
              className="product-card-image object-cover"
              w="100%"
              h="100%"
            />
          </Box>

          <Stack className="smartscalar product-card-trend" mih={70} gap={0}>
            <Text className="product-card-title" pl="8px" lineClamp={1}>
              {truncate(product.title, truncateLength)}
            </Text>

            <Box py={4} h={questionHeight}>
              <LoadWhenVisible>
                <RemountOnSiteChange>
                  <StaticQuestion
                    questionId="8emcAd9TTrPoHLuaFaUh0"
                    withChartTypeSelector={false}
                    height={questionHeight}
                    initialSqlParameters={{ product_id: product.id }}
                  />
                </RemountOnSiteChange>
              </LoadWhenVisible>
            </Box>

            <ProductCardFooter />
          </Stack>
        </Stack>
      </Stack>
    </LinkWithSearchParams>
  )
}
