import { SimpleGrid, Stack, Title, Flex } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"

import { ProductCard } from "./ProductCard"

import { getProductList } from "../../utils/query-product"

import { siteAtom } from "../../store/site"
import { useAtom } from "jotai"
import { SiteKey } from "../../types/site"
import { FullPageLoader } from "../../components/Loader"

interface Props {
  categoryId?: string
}

export const ProductAnalyticsPage = (props: Props) => {
  const [site] = useAtom(siteAtom)
  const categoryId = props.categoryId && parseInt(props.categoryId, 10)

  const query = useQuery({
    queryKey: ["products", site],
    queryFn: () => getProductList(site),
  })

  let products = query.data ?? []

  if (categoryId) {
    products = products.filter((product) => product.category.id === categoryId)
  }

  if (query.isLoading) return <FullPageLoader />

  return (
    <Flex w="100%" justify="center">
      <Stack w="100%" maw="1000px" className="gap-y-10">
        <Title className="overview-title">Overview</Title>

        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 3 }}
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
