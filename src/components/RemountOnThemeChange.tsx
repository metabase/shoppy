import { useEffect, useRef, useState } from "react"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

interface Props {
  children: React.ReactNode
}

/**
 * WORKAROUND: remount the children when the theme changes.
 * Some colors are not changing due to the use of `color(...)` function in viz.
 */
export function RemountOnThemeChange(props: Props) {
  const firstUpdate = useRef(true)

  const [themeName] = useAtom($theme)
  const [isRemounting, setRemounting] = useState(false)

  useEffect(() => {
    function remount() {
      if (firstUpdate.current) {
        firstUpdate.current = false
        return
      }

      setRemounting(true)
      setTimeout(() => setRemounting(false), 0)
    }

    remount()
  }, [themeName])

  if (isRemounting) return null

  return props.children
}
