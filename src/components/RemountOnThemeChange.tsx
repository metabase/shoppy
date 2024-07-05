import { useEffect, useRef, useState } from "react"
import { useAtom } from "jotai"

import { siteAtom } from "../store/theme"

interface Props {
  children: React.ReactNode
}

/**
 * WORKAROUND: remount the children when the theme changes.
 *
 * This causes the charts data to be re-fetched and re-rendered
 * when the theme changes.
 */
export function RemountOnThemeChange(props: Props) {
  const firstUpdate = useRef(true)

  const [themeName] = useAtom(siteAtom)
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
