import { Button, Menu } from "@mantine/core"
import { Link } from "wouter"

export const NewQuestionButton = () => {
  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <Button>New</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/analytics/new/from-scratch">
          <Menu.Item>From Scratch</Menu.Item>
        </Link>
        <Link to="/analytics/new/from-template">
          <Menu.Item>From Templates</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}
