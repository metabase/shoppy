import { getRandomEntity } from "./get-random-entity"

/**
 * Initially returns entities based on the `iterationIndex` to guarantee that all entities are linked
 * After that returns random entities
 */
export const getEntityToLink = <T>({
  entities,
  iterationIndex,
}: {
  entities: T[]
  iterationIndex: number
}) => {
  const listSize = entities.length

  if (iterationIndex < listSize) {
    return entities[iterationIndex]
  }

  return getRandomEntity(entities)
}
