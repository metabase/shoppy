/**
 * Get a random entity to link to the primary entity
 * Guarantees that at least each entity to link is linked to at least a single primary entity
 */
export const getRandomEntityToLink = <T>({
  primaryEntityIndex,
  entitiesToLink,
}: {
  primaryEntityIndex: number
  entitiesToLink: T[]
}) => {
  const listSize = entitiesToLink.length
  let randomIndex = Math.floor(Math.random() * listSize)

  if (primaryEntityIndex < listSize) {
    randomIndex = primaryEntityIndex
  }

  return entitiesToLink[randomIndex]
}
