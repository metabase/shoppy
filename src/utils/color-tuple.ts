type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never

export const colorTuple = (v: string): Tuple<string, 10> => [
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
  v,
]
