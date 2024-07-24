import { Fragment } from "react"
import { useAtom } from "jotai"

import { siteAtom } from "../store/site"

interface Props {
  children: React.ReactNode
}

/**
 * WORKAROUND: remount the children when the site changes.
 *
 * This causes the charts data to be re-fetched and re-rendered
 * when the theme changes.
 */
export function RemountOnSiteChange(props: Props) {
  const [site] = useAtom(siteAtom)

  return <Fragment key={site}>{props.children}</Fragment>
}
