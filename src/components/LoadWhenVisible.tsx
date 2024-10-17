import React, { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"

export const LoadWhenVisible = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [shouldRender, setShouldRender] = useState(false)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  return <div ref={ref}>{shouldRender && children}</div>
}
