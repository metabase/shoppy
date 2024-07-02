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
      <Stack p="12px">
        <Stack gap={10}>
          <Flex>
            <Image
              src={image}
              className="w-full object-cover object-center aspect-square"
            />
          </Flex>

          <Stack className="text-white smartscalar" mih={70} gap="xs">
            <Text
              fz="18px"
              fw={300}
              className="truncate"
              truncate="end"
              w="200px"
              pl="8px"
            >
              {product.title}
            </Text>

            <RemountOnThemeChange>
              <StaticQuestion
                questionId={94}
                showVisualizationSelector={false}
                height={50}
              />
            </RemountOnThemeChange>

            <Button w="fit-content" className="action-button" ml="8px" fw={300}>
              See more
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
