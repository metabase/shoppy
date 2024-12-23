import { MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

export type SiteKey = "acme" | "stitch" | "luminara" | "pug"

export type SiteInfo = {
  title: string
  key: SiteKey
  icon: string
  shopId: number
}

export type SiteConfig = {
  mantine: MantineThemeOverride
  metabase: MetabaseTheme
}
