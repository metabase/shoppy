import { Box } from "@mantine/core"

interface Props {
  id: string
}

export const ProductDetailPage = (props: Props) => {
  return <Box>{props.id}</Box>
}
