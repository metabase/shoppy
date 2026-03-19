import { Card, Title, Box } from "@mantine/core"

import { useGuestToken } from "../../hooks/useGuestToken"

const MAX_W = 600

interface Props {
  productId: number
}

export const ProductDetailInsights = (props: Props) => {
  const ordersOverTimeToken = useGuestToken({
    type: "question",
    id: 410, //"T7IZWpCbXleEI-66bXyCd",
    params: { product_id: props.productId },
  })

  const totalOrdersToken = useGuestToken({
    type: "question",
    id: 409, //"zsF-eNRxoLlpfxQwkbP4b",
    params: { product_id: props.productId },
  })

  return (
    <Box className="space-y-4">
      <Card maw={MAX_W} className="card product-insights-card">
        <Title size="18px" pb={10} className="product-detail-card-title">
          Orders over time
        </Title>

        <Box h={250} className="orders-over-time-container">
          {ordersOverTimeToken && (
            <metabase-question
              token={ordersOverTimeToken}
              style={{ display: "block", height: "100%" }}
              with-title="false"
            />
          )}
        </Box>
      </Card>

      <Card maw={MAX_W} className="card smartscalar product-insights-card">
        <Title size="18px" mb={10} className="product-detail-card-title">
          Total orders
        </Title>

        <Box h={70}>
          {totalOrdersToken && (
            <metabase-question
              token={totalOrdersToken}
              style={{ display: "block", height: "100%" }}
              with-title="false"
            />
          )}
        </Box>
      </Card>
    </Box>
  )
}
