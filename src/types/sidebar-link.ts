import { SiteKey } from "./site"

export interface SidebarLink {
  to?: string
  title?: string
  key?: string
  children?: SidebarLink[]
  defaultOpened?: boolean
  component?: React.FC
  onClick?: () => void
  hideOnMobile?: boolean

  /** Icons are specific to a site. */
  icons?: Partial<Record<SiteKey, string | React.FC>>
}
