import { SimpleGrid, Stack, Title, Container, Text } from "@mantine/core"
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
    const isStitchLimitedCategory = site === "stitch" && [5, 7].includes(categoryId)
    products = products.slice(0, isStitchLimitedCategory ? 2 : 3)
  } else {
    products = products.slice(0, 6)
  }

  const currentCategoryName =
    categoryQuery.data?.find((category) => category.id === categoryId)?.name ??
    (site === "proficiency" ? "New courses" : "New products")

  const sublineItem = site === "proficiency" ? "course" : "product"
  const sublineFont = site === "stitch" ? "Inter" : "var(--font-family-sans)"
  const sublineColor = site === "proficiency" ? "rgba(0, 0, 0, 0.7)" : undefined

  // If the site changes, redirect back to the product listing page.
  // This ensures we don't show product from last site's categories.
  useSiteChanged(() => navigate("/admin/products"))

  if (query.isLoading) return <FullPageLoader />

  return (
    <Container size={1008} px={0}>
      <Stack className="gap-y-10">
        <Stack gap={8}>
          <Title className="overview-title">{currentCategoryName}</Title>
          <Text size="16px" style={{ fontFamily: sublineFont, color: sublineColor }}>Total sales of each {sublineItem} this month</Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 3 }}
          spacing="24px"
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
  proficiency: 24,
}
