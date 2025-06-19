import { Text, Card, Box, Title, Flex } from "@mantine/core"
import { LinkWithSearchParams } from "../../components/LinkWithSearchParams"

export interface DashboardLinkCardProps {
  entityId: string
  title: string
  description?: string
  author: string
  date: string
}

export const DashboardLinkCard = (props: DashboardLinkCardProps) => {
  return (
    <LinkWithSearchParams to={`/analytics/${props.entityId}`}>
      <Card className="card gap-y-5 justify-between" h="100%" withBorder p={12}>
        <Box>
          <Title size="h4">{props.title}</Title>

          <Text fz="14px">{props.description ?? "No description."}</Text>
        </Box>

        <Flex>
          <Text>
            {props.author}
            <span className="px-1"> • </span>
            {props.date}.
          </Text>
        </Flex>
      </Card>
    </LinkWithSearchParams>
  )
}
