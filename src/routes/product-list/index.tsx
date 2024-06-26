import { Grid, Loader } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductCard } from "./ProductCard"

import { getProductList } from "../../utils/query-product"

interface Props {
  categoryId?: string
}

export const ProductAnalyticsPage = (props: Props) => {
  const categoryId = props.categoryId && parseInt(props.categoryId, 10)

  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductList(),
  })

  let products = query.data ?? []

  if (categoryId) {
    products = products.filter((product) => product.category.id === categoryId)
  }

  if (query.isLoading) return <Loader />

  return (
    <Grid justify="flex-start" align="stretch">
      {products.map((product) => (
        <Grid.Col span={3} key={product.id}>
          <ProductCard product={product} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
