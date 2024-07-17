import { Link } from "wouter"

import { InteractiveQuestion } from "@metabase/embedding-sdk-react"
import { Stack, Text, Image, Box } from "@mantine/core"
import { useAtom } from "jotai"

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
      <Stack className="product-card">
        <Stack gap={10}>
          <Image src={image} className="product-card-image w-full" />

          <Stack className="smartscalar product-card-trend" mih={70} gap={0}>
            <Text className="product-card-title" truncate="end" pl="8px">
              {product.title}
            </Text>

            <Box py={4} mih={questionHeight}>
              <RemountOnSiteChange>
                <InteractiveQuestion
                  questionId={161}
                  height={questionHeight}
                  parameterValues={{ product_id: product.id }}
                />
              </RemountOnSiteChange>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
