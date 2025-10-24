import { Card, Title, Box, Modal, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { withProductClickAction } from "../../utils/metabase-plugins"

const MAX_W = 600

interface Props {
  productId: number
}

export const ProductDetailInsights = (props: Props) => {
  const [isModalOpen, modal] = useDisclosure(false)

  return (
    <Box className="space-y-4">
      <Card maw={MAX_W} className="card product-insights-card">
        <Title size="18px" pb={10} className="product-detail-card-title">
          Orders over time
        </Title>

        <Box
          onClick={modal.open}
          h={250}
          className="orders-over-time-container"
        >
          <RemountOnSiteChange>
            <StaticQuestion
              questionId="PgajooaC4Bo1lkVnu5jMM"
              height={250}
              initialSqlParameters={{ product_id: props.productId }}
            />
          </RemountOnSiteChange>
        </Box>
      </Card>

      <Card maw={MAX_W} className="card smartscalar product-insights-card">
        <Title size="18px" mb={10} className="product-detail-card-title">
          Total orders
        </Title>

        <RemountOnSiteChange>
          <StaticQuestion
            questionId="8emcAd9TTrPoHLuaFaUh0"
            height={70}
            initialSqlParameters={{ product_id: props.productId }}
          />
        </RemountOnSiteChange>
      </Card>

      <Modal
        classNames={{ content: "bg-background py-3" }}
        opened={isModalOpen}
        onClose={modal.close}
        withCloseButton={false}
        size="xl"
      >
        <Flex h="700px" className="orders-over-time-container">
          <InteractiveQuestion
            questionId="jA76uaXQKWC1xp7q2TvE2"
            title={
              <Title fw={400} size="h2" className="product-detail-card-title">
                Orders over time
              </Title>
            }
            height="100%"
            plugins={{
              mapQuestionClickActions: withProductClickAction({
                onBeforeOpenModal: modal.close,
              }),
            }}
          />
        </Flex>
      </Modal>
    </Box>
  )
}
