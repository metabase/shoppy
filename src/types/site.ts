import { MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

export type SiteKey = "acme" | "stitch" | "luminara" | "pug"

export type SiteInfo = {
  key: SiteKey
  icon: string
  shopId: number
}

export type SiteConfig = {
  mantine: MantineThemeOverride
  metabase: MetabaseTheme
}
