import { Card, Title, Box, Modal, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"
import { InteractiveQuestionView } from "../../components/InteractiveQuestionView"

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
              questionId={165}
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
            questionId={161}
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
        <Flex mih={700} className="orders-over-time-container">
          <InteractiveQuestion
            questionId={158}
            title={
              <Title fw={400} size="h2" className="product-detail-card-title">
                Orders over time
              </Title>
            }
          >
            <InteractiveQuestionView />
          </InteractiveQuestion>
        </Flex>
      </Modal>
    </Box>
  )
}
