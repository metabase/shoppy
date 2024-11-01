import { Button, ButtonProps } from "@mantine/core"
import cx from "classnames"

export function ThemedButton(props: ButtonProps) {
  return <Button className={cx("themed-button", props.className)} {...props} />
}
