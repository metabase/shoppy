import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

import { SiteConfig } from "../types/site"

const colors = {
  primary: "#3F4BF3",
  secondary: "#3F4BF3",
  lighterGrey: "#D1CFC5",
  lightGrey: "#545455",
  darkGrey: "#1B1C21",
  background: "#FFFCEE",
  positive: "#00B509",
  negative: "#D30100",
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
    filter: colors.secondary,
    "text-primary": colors.darkGrey,
    "text-secondary": colors.lightGrey,
    "text-tertiary": colors.lightGrey,
    border: "#3B3F3F",
    background: colors.background,
    "background-hover": "#FCFAF1",
    charts: [
      colors.primary,
      colors.negative,
      "#ECB405",
      "#BD37C9",
      colors.positive,
      "#545455",
    ],
    positive: colors.positive,
    negative: colors.negative,
  },
  components: {
    cartesian: {
      padding: "4px 10px",
    },
    dashboard: {
      card: {
        border: `1px solid ${colors.lighterGrey}`,
      },
    },
    scalar: {
      value: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
  },
}

export const PugSite: SiteConfig = { metabase, mantine }
