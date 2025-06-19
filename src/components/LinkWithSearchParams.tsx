import { Link, useSearchParams, type LinkProps } from "wouter"

export function LinkWithSearchParams({ to, href, ...props }: LinkProps) {
  const [searchParams] = useSearchParams()
  const hasSearchParams = searchParams.toString().length > 0
  const newHref = `${href ?? to}${hasSearchParams ? "?" + searchParams.toString() : ""}`

  return <Link href={newHref} {...props} />
}
