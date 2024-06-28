import { MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

export type ThemeKey = "dark" | "light" | "blue"

export type ThemeInfo = {
  title: string
  key: ThemeKey
  icon: string
}

export type ThemeConfig = {
  mantine: MantineThemeOverride
  metabase: MetabaseTheme
}
