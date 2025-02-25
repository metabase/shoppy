import { useAtom } from "jotai"
import { productIdForClickActionModalAtom } from "../store/click-actions"
import { Box, Image, Modal, Text, Grid, Center, Loader } from "@mantine/core"
import { truncate } from "../utils/truncate"
import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../utils/query-product"
import { useMemo } from "react"

export const ClickActionDemoModal = () => {
  const [productId, setProductId] = useAtom(productIdForClickActionModalAtom)

  const productQuery = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId!),
    enabled: productId !== null,
  })

  const product = productQuery.data

  const content = useMemo(() => {
    if (productQuery.isLoading) {
      return (
        <Center h={200}>
          <Loader size="lg" variant="dots" />
        </Center>
      )
    }

    if (product) {
      return (
        <Grid gutter="xl" align="center">
          <Grid.Col span={5}>
            <Box
              style={{
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image src={product.imageUrl} fit="cover" />
            </Box>
          </Grid.Col>
          <Grid.Col span={7}>
            <Text size="lg" mb="sm" fw={600}>
              {truncate(product.title, 50)}
            </Text>

            <Text size="md" style={{ lineHeight: 1.6 }}>
              {product.description}
            </Text>
          </Grid.Col>
        </Grid>
      )
    }

    return null
  }, [product, productQuery.isLoading])

  return (
    <Modal
      centered
      opened={productId !== null}
      onClose={() => setProductId(null)}
      size="lg"
      withCloseButton={false}
      styles={{
        body: {
          padding: "1.5rem",
        },
      }}
    >
      {content}
    </Modal>
  )
}
