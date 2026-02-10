import { useEffect, useRef, RefObject, ReactNode, useCallback } from "react"
import { useLocation } from "wouter"

interface Props {
  children: ReactNode
  metricKey: string
  enabled?: boolean
}

const RECORDED_METRICS = new Set<string>()

const ALL_CARDS_DEBOUNCE_MS = 2000

const hasVisualization = (node: Element): boolean => {
  // [data-card-key] is present on a Question and on an each Dashboard card
  return node.querySelector("[data-card-key]") !== null
}

/**
 * Observes a container for [data-card-key] elements via MutationObserver.
 * Waits for ALL cards to appear (debounced), then emits a `metabase:timing`
 * event with the last-card timestamp.
 */
const useCardLoadObserver = (
  containerRef: RefObject<HTMLDivElement | null>,
  metricKey: string,
  enabled: boolean,
) => {
  const reportedRef = useRef(false)
  const [location] = useLocation()

  useEffect(() => {
    RECORDED_METRICS.clear()
    reportedRef.current = false
  }, [location])

  const onAllCardsLoaded = useCallback(
    (timing: number) => {
      if (RECORDED_METRICS.has(metricKey)) {
        return
      }

      RECORDED_METRICS.add(metricKey)

      window.dispatchEvent(
        new CustomEvent("metabase:timing", {
          detail: { metricKey, timing },
        }),
      )
    },
    [metricKey],
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    const container = containerRef.current

    if (!container) {
      return
    }

    let lastCardTimestamp = performance.now()
    let debounceTimer: ReturnType<typeof setTimeout> | null = null

    const checkAndDebounce = () => {
      if (reportedRef.current) {
        return
      }

      if (!hasVisualization(container)) {
        return
      }

      lastCardTimestamp = performance.now()

      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }

      debounceTimer = setTimeout(() => {
        if (!reportedRef.current) {
          reportedRef.current = true
          onAllCardsLoaded(lastCardTimestamp)
        }
      }, ALL_CARDS_DEBOUNCE_MS)
    }

    checkAndDebounce()

    const observer = new MutationObserver(() => {
      checkAndDebounce()
    })

    observer.observe(container, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
    }
  }, [containerRef, enabled, onAllCardsLoaded])
}

/**
 * Wrapper that detects when a Metabase visualization loads and records
 */
export const MetabaseDatadogLoadTimer = ({
  children,
  metricKey,
  enabled = true,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useCardLoadObserver(containerRef, metricKey, enabled)

  return <div ref={containerRef}>{children}</div>
}
