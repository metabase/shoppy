import React, { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"

export const LoadWhenVisible = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [loaded, setLoaded] = useState(false)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) setLoaded(true)
  }, [inView])

  return <div ref={ref}>{loaded && children}</div>
}
