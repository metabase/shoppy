import { type FloatingPosition, Menu } from "@mantine/core"
import { useAtom } from "jotai"
import { Link } from "wouter"
import { resetQuestionAtom, templateQuestionIdAtom } from "../store/create"

type Props = {
  children: React.ReactNode
  position?: FloatingPosition
  prefix?: string
}

export const NewQuestionMenu = ({ children, prefix = "", position }: Props) => {
  const [, resetQuestion] = useAtom(resetQuestionAtom)
  const [, setTemplateQuestionId] = useAtom(templateQuestionIdAtom)

  return (
    <Menu shadow="md" width={200} position={position}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Link
          href={prefix + "/analytics/new/from-scratch"}
          onClick={() => resetQuestion()}
        >
          <Menu.Item>From Scratch</Menu.Item>
        </Link>
        <Link
          href={prefix + "/analytics/new/from-template"}
          onClick={() => setTemplateQuestionId(null)}
        >
          <Menu.Item>From Templates</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}
