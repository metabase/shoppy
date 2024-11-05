export interface SidebarLink {
  to?: string
  title?: string
  key?: string
  children?: SidebarLink[]
  defaultOpened?: boolean
  component?: React.FC
  onClick?: () => void
  hideOnMobile?: boolean
}
