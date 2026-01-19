import { useEffect, useRef, ReactNode } from "react"
import { datadogRum } from "@datadog/browser-rum"

interface Props {
  children: ReactNode
  metricKey: string
}

const RECORDED_METRICS = new Set<string>()

const recordQuestionLoaded = (metricKey: string) => {
  if (RECORDED_METRICS.has(metricKey)) return

  RECORDED_METRICS.add(metricKey)
  datadogRum.addTiming(`${metricKey}_first`)
}

const hasVisualization = (node: Element): boolean => {
  // [data-card-key] is present on a Question and on an each Dashboard card
  return node.querySelector("[data-card-key]") !== null
}

/**
 * Wrapper that detects when a Metabase visualization loads and records
 */
export const MetabaseDatadogLoadTimer = ({ children, metricKey }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const reportedRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (hasVisualization(container)) {
      reportLoaded()
      return
    }

    const observer = new MutationObserver(() => {
      if (!reportedRef.current && hasVisualization(container)) {
        reportLoaded()
        observer.disconnect()
      }
    })

    observer.observe(container, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  function reportLoaded() {
    if (reportedRef.current) return
    reportedRef.current = true
    recordQuestionLoaded(metricKey)
  }

  return <div ref={containerRef}>{children}</div>
}
