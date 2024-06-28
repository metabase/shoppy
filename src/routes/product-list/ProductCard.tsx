import { Link } from "wouter"
import { IconDots } from "@tabler/icons-react"
import { StaticQuestion } from "@metabase/embedding-sdk-react"
import {
  Stack,
  Box,
  Checkbox,
  Text,
  Image,
  Flex,
  Divider,
  Button,
  Title,
} from "@mantine/core"

import { Product } from "../../types/product"
import { RemountOnThemeChange } from "../../components/RemountOnThemeChange"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const image = product.imageUrl ?? "/mock-t-shirt.webp"

  return (
    <Link href={`/products/${product.id}`}>
      <Stack className="card" p="12px">
        <Stack gap={10}>
          <Box>
            <Text fz="20px" fw={300} className="truncate" truncate="end">
              {product.title}
            </Text>
          </Box>

          <Flex>
            <Image
              src={image}
              className="w-full object-cover object-center aspect-square"
            />
          </Flex>

          <Flex
            align="center"
            justify="center"
            className="text-white smartscalar"
            mih={70}
          >
            <RemountOnThemeChange>
              <StaticQuestion
                questionId={94}
                showVisualizationSelector={false}
                height={80}
              />
            </RemountOnThemeChange>
          </Flex>
        </Stack>
      </Stack>
    </Link>
  )
}
