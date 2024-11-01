import { Button, ButtonProps } from "@mantine/core"
import cx from "classnames"
import { ForwardedRef, forwardRef } from "react"

export const ThemedButton = forwardRef(function ThemedButton(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      {...props}
      ref={ref}
      className={cx("themed-button", props.className)}
    />
  )
})
