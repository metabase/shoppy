import { Flex, Card, Title, Text, Box, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import "./product-detail.css"

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
        <Text c="white" fw={700} fz="17px">
          Insights
        </Text>

        <Text c="primary" fw="bold" size="xs">
          See more
        </Text>
      </Flex>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white border border-dark-grey rounded-md"
      >
        <Title size="h3" pb={10} fw={200}>
          Orders over time
        </Title>

        <Box onClick={modal.open}>
          <StaticQuestion questionId={95} height={250} />
        </Box>
      </Card>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white smartscalar border border-dark-grey"
      >
        <StaticQuestion
          questionId={91}
          showVisualizationSelector={false}
          height={70}
        />
      </Card>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white pd-question border border-dark-grey"
      >
        <Title size="h3" pb={10} fw={200}>
          Sales goal
        </Title>

        <StaticQuestion
          questionId={154}
          showVisualizationSelector={false}
          height={150}
        />
      </Card>

      <Modal
        classNames={{ content: "bg-dark-grey py-3" }}
        opened={isModalOpen}
        onClose={modal.close}
        withCloseButton={false}
        size="xl"
      >
        <InteractiveQuestion
          questionId={95}
          height={500}
          withTitle
          customTitle={
            <Title c="white" fw={400} size="h2">
              Orders over time
            </Title>
          }
        />
      </Modal>
    </Box>
  )
}
