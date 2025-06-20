import { Link, useSearch, type LinkProps } from "wouter"

interface ForbiddenProperties {
  /**
   * @deprecated Please use `href` instead.
   */
  to?: never
}

type RemoveFields<Type, Fields extends keyof Type> = {
  [Property in keyof Type as Exclude<Property, Fields>]: Type[Property]
}

export function LinkWithSearchParams({
  href,
  ...props
}: RemoveFields<LinkProps, "to"> & ForbiddenProperties) {
  props
  const search = useSearch()
  const newHref = `${href}${search ? `?${search}` : ""}`

  return <Link href={newHref} {...props} />
}
