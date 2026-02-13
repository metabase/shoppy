const sortAsc = (values) => [...values].sort((a, b) => a - b)

export function median(values) {
  const sorted = sortAsc(values)
  const mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2 !== 0) {
    return sorted[mid]
  }

  return (sorted[mid - 1] + sorted[mid]) / 2
}

export function aggregateTimings(values) {
  return {
    median: Math.round(median(values)),
    sample_count: values.length,
  }
}
