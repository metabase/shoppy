import { Grid, Text, Container, Loader, Box } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductDetailCard } from "./ProductDetailCard"
import { ProductDetailInsights } from "./ProductDetailInsights"

import "./product-detail.css"
import { getProductById } from "../../utils/query-product"

interface Props {
  id: string
}

export const ProductDetailPage = ({ id }: Props) => {
  const query = useQuery({
    queryKey: ["product", id ?? null],
    queryFn: ({ queryKey: [_, id] }) => getProductById(parseInt(id)),
  })

  const product = query.data

  if (query.isLoading) return <Loader />
  if (!product) return <div>Product not found</div>

  return (
    <Container>
      <Box pb="lg">
        <Text c="white" lts={0.5} size="md">
          {product.title}
        </Text>
      </Box>

      <Grid gutter="xl">
        <Grid.Col span={4}>
          <ProductDetailCard product={product} />
        </Grid.Col>

        <Grid.Col span={8}>
          <ProductDetailInsights />
        </Grid.Col>
      </Grid>
    </Container>
  )
}