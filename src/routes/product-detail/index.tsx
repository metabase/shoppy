import { useAtom } from "jotai"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { navigate } from "wouter/use-browser-location"
import { Grid, Container, Box, Text, Flex } from "@mantine/core"

import { ProductDetailCard } from "./ProductDetailCard"
import { ProductDetailInsights } from "./ProductDetailInsights"

import { siteAtom } from "../../store/site"
import { truncate } from "../../utils/truncate"
import { getProductById } from "../../utils/query-product"
import { FullPageLoader } from "../../components/Loader"

import { SITES } from "../../constants/sites"

interface Props {
  id: string
}

export const ProductDetailPage = ({ id }: Props) => {
  const [siteKey] = useAtom(siteAtom)

  const query = useQuery({
    queryKey: ["product", id ?? null],
    queryFn: ({ queryKey: [_, id] }) => getProductById(parseInt(id, 10)),
  })

  const product = query.data

  // If the product is from a different shop, redirect back to the product listing page.
  // This prevents the user from seeing data from a different shop.
  useEffect(() => {
    const site = SITES.find((s) => s.key === siteKey)

    if (product && site && site.shopId !== product.shopId) {
      navigate("/admin/products")
    }
  }, [siteKey, product])

  if (query.isLoading) return <FullPageLoader />
  if (!product) return <div>Product not found</div>

  return (
    <Container>
      <Box>
        <Text size="48px" className="product-detail-title" pb="5px">
          {truncate(product.title, 50)}
        </Text>
      </Box>

      <Flex w="100%" align="center" justify="space-between" mt="30px" mb="20px">
        <Text className="product-insights-title">Insights</Text>

        <Text fw={300} size="sm" className="product-insights-see-more" mr="8px">
          See more
        </Text>
      </Flex>

      <Grid gutter="xl">
        <Grid.Col span={4}>
          <ProductDetailCard product={product} />
        </Grid.Col>

        <Grid.Col span={8}>
          <ProductDetailInsights productId={product.id} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
