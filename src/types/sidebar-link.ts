export interface SidebarLink {
  to?: string
  title: string
  children?: SidebarLink[]
  defaultOpened?: boolean
}
