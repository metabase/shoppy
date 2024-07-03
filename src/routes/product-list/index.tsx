import { Grid, SimpleGrid, Loader, Stack, Title, Flex } from "@mantine/core"
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
    <Flex w="100%" justify="center">
      <Stack w="100%" maw="1000px" className="gap-y-10">
        <Title size="h1" className="overview-title">
          Overview
        </Title>

        <SimpleGrid cols={3} spacing="xs" verticalSpacing="xl">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}
