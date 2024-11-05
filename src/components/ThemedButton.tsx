import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core"
import cx from "classnames"
import { ForwardedRef, forwardRef } from "react"

type ThemedButtonProps = PolymorphicComponentProps<"button", ButtonProps>

export const ThemedButton = forwardRef(function ThemedButton(
  props: ThemedButtonProps,
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
