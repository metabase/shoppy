import { MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

export type ThemeKey = "stitch" | "luminara" | "pug"

export type ThemeInfo = {
  title: string
  key: ThemeKey
  icon: string
}

export type ThemeConfig = {
  mantine: MantineThemeOverride
  metabase: MetabaseTheme
}
