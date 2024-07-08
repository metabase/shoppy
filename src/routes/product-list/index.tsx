import { SimpleGrid, Loader, Stack, Title, Flex } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductCard } from "./ProductCard"

import { getProductList } from "../../utils/query-product"

import { siteAtom } from "../../store/site"
import { useAtom } from "jotai"
import { SiteKey } from "../../types/site"

interface Props {
  categoryId?: string
}

export const ProductAnalyticsPage = (props: Props) => {
  const [site] = useAtom(siteAtom)
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
        <Title size="48px" className="overview-title">
          Overview
        </Title>

        <SimpleGrid
          cols={{ base: 2, sm: 3 }}
          spacing="xl"
          verticalSpacing={VERTICAL_SPACING[site]}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

const VERTICAL_SPACING: Record<SiteKey, number> = {
  stitch: 64,
  luminara: 28,
  pug: 80,
}
