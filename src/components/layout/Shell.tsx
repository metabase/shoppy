import { AppShell, Box, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ReactNode } from "react"
import { Link } from "wouter"

import { SidebarLinks } from "./SidebarLinks"
import { SiteSwitcher } from "../SiteSwitcher"
import { SiteLogo } from "../SiteLogo"
import { Icon } from "@iconify/react"

interface Props {
  children: ReactNode
}

export function Shell(props: Props) {
  return (
    <Box>
      {/* <div>
        <SiteSwitcher />
      </div> */}

      {/* <Flex direction="column" justify="space-between" h="100%" w="100%">
        <Box w="100%">
          <Link to="/admin/products">
            <SiteLogo />
          </Link>

          <SidebarLinks />
        </Box>

        <Flex className="sidebar-icons gap-x-3">
          <Icon icon="tabler:user" fontSize={30} />
          <Icon icon="tabler:settings" fontSize={30} />
        </Flex>
      </Flex> */}

      {props.children}
    </Box>
  )
}
