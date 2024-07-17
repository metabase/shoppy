import { Grid, Container } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductDetailCard } from "./ProductDetailCard"
import { ProductDetailInsights } from "./ProductDetailInsights"

import { getProductById } from "../../utils/query-product"
import { FullPageLoader } from "../../components/Loader"

interface Props {
  id: string
}

export const ProductDetailPage = ({ id }: Props) => {
  const query = useQuery({
    queryKey: ["product", id ?? null],
    queryFn: ({ queryKey: [_, id] }) => getProductById(parseInt(id, 10)),
  })

  const product = query.data

  if (query.isLoading) return <FullPageLoader />
  if (!product) return <div>Product not found</div>

  return (
    <Container>
      <Grid gutter="xl" pt={30}>
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
