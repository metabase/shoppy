import { useEffect, useRef, ReactNode, useCallback } from "react"
import { useLocation } from "wouter"
import { datadogRum } from "@datadog/browser-rum"

interface Props {
  children: ReactNode
  metricKey: string
  enabled?: boolean
  context?: Record<string, string>
}

const RECORDED_METRICS = new Set<string>()

const recordEntityLoaded = (
  metricKey: string,
  context?: Record<string, string>,
) => {
  if (RECORDED_METRICS.has(metricKey)) {
    return
  }

  RECORDED_METRICS.add(metricKey)

  if (context) {
    Object.entries(context).forEach(([key, value]) => {
      datadogRum.setViewContextProperty(key, value)
    })
  }

  datadogRum.addTiming(`${metricKey}_first`)
}

const hasVisualization = (node: Element): boolean => {
  // [data-card-key] is present on a Question and on an each Dashboard card
  return node.querySelector("[data-card-key]") !== null
}

/**
 * Wrapper that detects when a Metabase visualization loads and records
 */
export const MetabaseDatadogLoadTimer = ({
  children,
  metricKey,
  enabled = true,
  context,
}: Props) => {
  const [location] = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const reportedRef = useRef(false)

  const reportLoaded = useCallback(() => {
    if (reportedRef.current) {
      return
    }

    reportedRef.current = true
    recordEntityLoaded(metricKey, context)
  }, [metricKey, context])

  useEffect(() => {
    RECORDED_METRICS.clear()
    reportedRef.current = false
  }, [location])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const container = containerRef.current

    if (!container) {
      return
    }

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
  }, [enabled, reportLoaded])

  return <div ref={containerRef}>{children}</div>
}
