import { Grid } from "@mantine/core"

import { ProductCard } from "./ProductCard"

import "./product-list.css"

export const ProductAnalyticsPage = () => {
  return (
    <Grid justify="flex-start" align="stretch">
      {Array.from({ length: 10 }).map((_, i) => (
        <Grid.Col span={3} key={i}>
          <ProductCard id={i} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
