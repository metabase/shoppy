import { type FloatingPosition, Menu } from "@mantine/core"
import { Link } from "wouter"

type Props = {
  children: React.ReactNode
  position?: FloatingPosition
  prefix?: string
}

export const NewQuestionMenu = ({ children, prefix = "", position }: Props) => {
  return (
    <Menu shadow="md" width={200} position={position}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Link href={prefix + "/analytics/new/from-scratch"}>
          <Menu.Item>From Scratch</Menu.Item>
        </Link>
        <Link href={prefix + "/analytics/new/from-template"}>
          <Menu.Item>From Templates</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}
