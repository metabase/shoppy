import { Link, useSearchParams, type LinkProps } from "wouter"

export function LinkWithSearchParams({ to, ...props }: LinkProps) {
  const [searchParams] = useSearchParams()
  const href = `${to}?${searchParams.toString()}`

  return <Link href={href} {...props} />
}
