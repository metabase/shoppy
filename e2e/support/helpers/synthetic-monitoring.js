const sortAsc = (values) => [...values].sort((a, b) => a - b)

export function filterOutliersIQR(values) {
  const sorted = sortAsc(values)
  const trimCount = Math.floor(sorted.length * 0.1)

  return sorted.slice(trimCount, sorted.length - trimCount)
}

export function median(values) {
  const sorted = sortAsc(values)
  const mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2 !== 0) {
    return sorted[mid]
  }

  return (sorted[mid - 1] + sorted[mid]) / 2
}

export function aggregateTimings(values) {
  const filtered = filterOutliersIQR(values)

  return {
    median: Math.round(median(filtered)),
    sample_count: filtered.length,
  }
}
