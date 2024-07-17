import { Flex, Card, Title, Text, Box, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { RemountOnSiteChange } from "../../components/RemountOnSiteChange"

const MAX_W = 600

export const ProductDetailInsights = () => {
  const [isModalOpen, modal] = useDisclosure(false)

  return (
    <Box className="space-y-4">
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        maw={MAX_W}
        mb={36}
        mt={10}
      >
        <Text className="product-insights-title">Insights</Text>

        <Text fw={300} size="sm" className="product-insights-see-more">
          See more
        </Text>
      </Flex>

      <Card maw={MAX_W} className="card">
        <Title size="18px" pb={10} className="product-detail-card-title">
          Orders over time
        </Title>

        <Box onClick={modal.open} h={250}>
          <RemountOnSiteChange>
            <StaticQuestion questionId={158} height={250} />
          </RemountOnSiteChange>
        </Box>
      </Card>

      <Card maw={MAX_W} className="card smartscalar">
        <Title size="18px" mb={10} className="product-detail-card-title">
          Total orders
        </Title>

        <RemountOnSiteChange>
          <StaticQuestion
            questionId={160}
            showVisualizationSelector={false}
            height={70}
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
        <InteractiveQuestion
          questionId={161}
          parameterValues={{ product_id: 15 }}
          height={500}
          withTitle
          customTitle={
            <Title fw={400} size="h2" className="product-detail-card-title">
              Orders over time
            </Title>
          }
        />
      </Modal>
    </Box>
  )
}
