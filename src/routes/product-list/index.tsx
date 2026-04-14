import { Stack, Title, Container } from "@mantine/core"
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
    products = products.slice(0, 3)
  } else {
    products = products.slice(0, 6)
  }

  const currentCategoryName =
    categoryQuery.data?.find((category) => category.id === categoryId)?.name ??
    "All products"

  // If the site changes, redirect back to the product listing page.
  // This ensures we don't show product from last site's categories.
  useSiteChanged(() => navigate("/admin/products"))

  if (query.isLoading) return <FullPageLoader />

  return (
    <Container size={1008} px={0}>
      <Stack w="1008px" className="gap-y-10">
        <Title className="overview-title">{currentCategoryName}</Title>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 320px)", gap: `${VERTICAL_SPACING[site]}px 24px` }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Stack>
    </Container>
  )
}

const VERTICAL_SPACING: Record<SiteKey, number> = {
  stitch: 64,
  luminara: 28,
  pug: 80,
  proficiency: 24,
}
