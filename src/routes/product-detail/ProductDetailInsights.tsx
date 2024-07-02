import { Flex, Card, Title, Text, Box, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import {
  StaticQuestion,
  InteractiveQuestion,
} from "@metabase/embedding-sdk-react"

import { RemountOnThemeChange } from "../../components/RemountOnThemeChange"

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
        <Text fw={300} fz="17px">
          Insights
        </Text>

        <Text c="primary" fw="bold" size="xs">
          See more
        </Text>
      </Flex>

      <Card maw={MAX_W} className="card">
        <Title size="h3" pb={10} fw={200}>
          Orders over time
        </Title>

        <Box onClick={modal.open} h={250}>
          <RemountOnThemeChange>
            <StaticQuestion questionId={158} height={250} />
          </RemountOnThemeChange>
        </Box>
      </Card>

      <Card maw={MAX_W} className="card smartscalar">
        <StaticQuestion
          questionId={91}
          showVisualizationSelector={false}
          height={70}
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
          questionId={158}
          height={500}
          withTitle
          customTitle={
            <Title fw={400} size="h2">
              Orders over time
            </Title>
          }
        />
      </Modal>
    </Box>
  )
}
