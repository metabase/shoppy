export const getRandomEntity = <T>(list: T[]) =>
  list[Math.floor(Math.random() * list.length)]
