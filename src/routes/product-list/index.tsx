import { Grid, Loader } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductCard } from "./ProductCard"

import { getProductList } from "../../utils/product-list"

import "./product-list.css"

export const ProductAnalyticsPage = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProductList })

  if (query.isLoading) return <Loader />

  return (
    <Grid justify="flex-start" align="stretch">
      {query.data?.map((product) => (
        <Grid.Col span={3} key={product.id}>
          <ProductCard product={product} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
