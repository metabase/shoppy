import { SimpleGrid, Stack, Title, Container } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { navigate } from "wouter/use-browser-location"

import { ProductCard } from "./ProductCard"

import { getProductList } from "../../utils/query-product"

import { siteAtom } from "../../store/site"
import { useAtom } from "jotai"
import { SiteKey } from "../../types/site"
import { FullPageLoader } from "../../components/Loader"
import { useSiteChanged } from "../../utils/use-site-changed"
import { getCategoryList } from "../../utils/query-category"

interface Props {
  categoryId?: string
}

export const ProductAnalyticsPage = (props: Props) => {
  const [site] = useAtom(siteAtom)

  const categoryId = props.categoryId ? parseInt(props.categoryId, 10) : null

  const query = useQuery({
    queryKey: ["products", site],
    queryFn: () => getProductList(site),
  })

  const categoryQuery = useQuery({
    queryKey: ["categories", site],
    queryFn: () => getCategoryList(site),
    enabled: categoryId !== null,
  })

  let products = query.data ?? []

  if (categoryId) {
    products = products.filter((product) => product.category.id === categoryId)
  }

  const currentCategoryName =
    categoryQuery.data?.find((c) => c.id === categoryId)?.name ?? "All products"

  // If the sitechanges, redirect back to the product listing page.
  // This ensures we don't show product from last site's categories.
  useSiteChanged(() => navigate("/admin/products"))

  if (query.isLoading) return <FullPageLoader />

  return (
    <Container>
      <Stack w="100%" maw="1000px" className="gap-y-10">
        <Title className="overview-title">{currentCategoryName}</Title>

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
    </Container>
  )
}

const VERTICAL_SPACING: Record<SiteKey, number> = {
  stitch: 64,
  luminara: 28,
  pug: 80,
  proficiency: 64,
}
