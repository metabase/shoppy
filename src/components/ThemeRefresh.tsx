import { useEffect, useState } from "react"
import { useAtom } from "jotai"

import { $theme } from "../store/theme"

interface Props {
  children: React.ReactNode
}

export function UnmountOnThemeRefresh(props: Props) {
  const [isRefreshing, setRefreshing] = useState(false)
  const [themeName] = useAtom($theme)

  // Unmount and remount the children when the theme changes.
  useEffect(() => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 0)
  }, [themeName])

  if (isRefreshing) {
    return null
  }

  return props.children
}
