import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

import { SiteConfig } from "../types/site"

const colors = {
  primary: "#DF75E9",
  filter: "#7ABBF9",
  lighterGrey: "#E3E7E4",
  lightGrey: "#ADABA9",
  darkGrey: "#3B3F3F",
  background: "#151C20",
}

const mantine: MantineThemeOverride = {
  fontFamily: "var(--font-family-sans), sans-serif",
  headings: { fontFamily: "var(--font-family-sans), sans-serif" },
  primaryColor: "primary",
  colors: {
    primary: t(colors.primary),
    "accent-lighter": t(colors.lighterGrey),
    "lighter-grey": t(colors.lighterGrey),
    "light-grey": t(colors.lightGrey),
    "dark-grey": t(colors.darkGrey),
    background: t(colors.background),
    white: t("#ffffff"),
  },
  activeClassName: "",
}

const metabase: MetabaseTheme = {
  fontFamily: "Custom",
  fontSize: "14px",
  colors: {
    brand: colors.primary,
    filter: colors.filter,
    "text-primary": colors.lighterGrey,
    "text-secondary": colors.lighterGrey,
    "text-tertiary": colors.lighterGrey,
    border: colors.darkGrey,
    background: colors.background,
    "background-hover": "#4C4A48",
    charts: [
      colors.primary,
      colors.filter,
      "#ED6A5A",
      "#FED18C",
      "#82A74B",
      "#FF8D69",
    ],
    positive: "#45DF4C",
    negative: "#FF3389",
  },
  components: {
    cartesian: {
      padding: "4px 10px",
    },
    dashboard: {
      card: {
        border: `"1px solid ${colors.darkGrey}"`,
      },
    },
    scalar: {
      value: {
        fontSize: "18px",
        lineHeight: "22px",
      },
    },
  },
}

export const StitchTheme: SiteConfig = { metabase, mantine }
