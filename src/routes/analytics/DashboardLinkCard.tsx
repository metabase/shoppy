import { Link } from "wouter"
import { Text, Card, Box, Title, Flex } from "@mantine/core"

export interface DashboardLinkCardProps {
  id: number
  title: string
  description?: string
  author: string
  date: string
}

export const DashboardLinkCard = (props: DashboardLinkCardProps) => {
  return (
    <Link to={`/analytics/${props.id}`}>
      <Card
        c="white"
        className="border-[#4C4A48] rounded-none gap-y-5 bg-transparent hover:bg-[#572B00] justify-between"
        h="100%"
        withBorder
        p={12}
      >
        <Box>
          <Title size="h4">{props.title}</Title>

          <Text c="#ADABA9" fz="14px">
            {props.description ?? "No description."}
          </Text>
        </Box>

        <Flex>
          <Text>
            {props.author}
            <span className="px-1"> • </span>
            {props.date}.
          </Text>
        </Flex>
      </Card>
    </Link>
  )
}
