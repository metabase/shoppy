import { MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

export type SiteKey = "stitch" | "luminara" | "pug"

export type SiteInfo = {
  title: string
  key: SiteKey
  icon: string
}

export type SiteConfig = {
  mantine: MantineThemeOverride
  metabase: MetabaseTheme
}
