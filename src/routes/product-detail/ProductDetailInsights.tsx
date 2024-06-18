import { Flex, Card, Title, Text, Box, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

const MAX_W = 600

export const ProductDetailInsights = () => {
  const [isModalOpen, modal] = useDisclosure(false)

  return (
    <Box className="space-y-5">
      <Flex w="100%" justify="space-between" maw={MAX_W}>
        <Text c="white" fw="bolder" lts={1.5} size="xs">
          INSIGHTS
        </Text>

        <Text c="#FF8002" fw="bold" size="xs">
          See more
        </Text>
      </Flex>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white pd-question-container border border-[#4C4A48] rounded-md"
      >
        <Title size="h3" pb={10}>
          Orders over time
        </Title>

        <Box onClick={modal.open}>
          <StaticQuestion questionId={95} height={250} />
        </Box>
      </Card>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white pd-trend-question-container border border-[#4C4A48]"
      >
        <StaticQuestion
          questionId={91}
          showVisualizationSelector={false}
          height={55}
        />
      </Card>

      <Card
        maw={MAX_W}
        bg="none"
        className="text-white pd-question-container border border-[#4C4A48]"
      >
        <Title size="h3" pb={10}>
          Sales goal
        </Title>

        <StaticQuestion
          questionId={85}
          showVisualizationSelector={false}
          height={150}
        />
      </Card>

      <Modal
        classNames={{ content: "bg-[#4C4A48] py-3" }}
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
            <Title c="#fff" fw={400} size="h2">
              Orders over time
            </Title>
          }
        />
      </Modal>
    </Box>
  )
}
