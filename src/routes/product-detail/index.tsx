import { Grid, Container } from "@mantine/core"

import { ProductDetailCard } from "./ProductDetailCard"
import { ProductDetailInsights } from "./ProductDetailInsights"

import "./product-detail.css"

interface Props {
  id: string
}

export const ProductDetailPage = (props: Props) => {
  return (
    <Container>
      <Grid gutter="xl">
        <Grid.Col span={4}>
          <ProductDetailCard />
        </Grid.Col>

        <Grid.Col span={8}>
          <ProductDetailInsights />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
