import { type ReactNode } from "react"
import { useAtom } from "jotai"
import { Menu, type FloatingPosition } from "@mantine/core"

import { resetQuestionAtom } from "../store/create"
import { LinkWithSearchParams } from "./LinkWithSearchParams"

type Props = {
  prefix?: string
  position?: FloatingPosition
  children: ReactNode
}

export const NewQuestionMenu = ({ children, prefix = "", position }: Props) => {
  const [, resetQuestion] = useAtom(resetQuestionAtom)

  return (
    <Menu shadow="md" width={200} position={position}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <LinkWithSearchParams
          href={prefix + "/analytics/new/ask-metabot"}
          onClick={resetQuestion}
        >
          <Menu.Item>Ask AI</Menu.Item>
        </LinkWithSearchParams>
        <LinkWithSearchParams
          href={prefix + "/analytics/new/from-scratch"}
          onClick={resetQuestion}
        >
          <Menu.Item>From Scratch</Menu.Item>
        </LinkWithSearchParams>
        <LinkWithSearchParams
          href={prefix + "/analytics/new/from-template"}
          onClick={resetQuestion}
        >
          <Menu.Item>From Templates</Menu.Item>
        </LinkWithSearchParams>
      </Menu.Dropdown>
    </Menu>
  )
}
