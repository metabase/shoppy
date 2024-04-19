import { Grid } from "@mantine/core"

import { ProductCard } from "../components/cards/ProductCard"

export const ProductAnalyticsPage = () => {
  return (
    <Grid justify="flex-start" align="stretch">
      {Array.from({ length: 10 }).map((_, i) => (
        <Grid.Col span={3}>
          <ProductCard id={i} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
