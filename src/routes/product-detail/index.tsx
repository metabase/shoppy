import { Grid, Container, Box, Text, Flex } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductDetailCard } from "./ProductDetailCard"
import { ProductDetailInsights } from "./ProductDetailInsights"

import { truncate } from "../../utils/truncate"

import { getProductById } from "../../utils/query-product"
import { FullPageLoader } from "../../components/Loader"
import { useSiteChanged } from "../../utils/use-site-changed"
import { navigate } from "wouter/use-browser-location"

interface Props {
  id: string
}

export const ProductDetailPage = ({ id }: Props) => {
  const query = useQuery({
    queryKey: ["product", id ?? null],
    queryFn: ({ queryKey: [_, id] }) => getProductById(parseInt(id, 10)),
  })

  const product = query.data

  // When the site changed, navigate to the product listing page.
  useSiteChanged(() => navigate("/admin/products"))

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
