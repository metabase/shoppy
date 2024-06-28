import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"
import { ThemeConfig } from "../types/theme"

const colors = {
  primary: "#3F4BF3",
  secondary: "#3F4BF3",
  lighterGrey: "#E3E7E4",
  lightGrey: "#ADABA9",
  darkGrey: "#3B3F3F",
  background: "#FFFCEE",
}

const mantine: MantineThemeOverride = {
  fontFamily: "Barlow, sans-serif",
  headings: { fontFamily: "Barlow, sans-serif" },
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
    "text-secondary": "#222222",
    "text-tertiary": "#222222",
    border: "#3B3F3F",
    background: colors.background,
    "background-hover": "#4C4A48",
    charts: [
      colors.primary,
      colors.secondary,
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
        border: "1px solid #3B3F3F",
      },
    },
    scalar: {
      value: {
        fontSize: "47px",
        lineHeight: "50px",
      },
    },
  },
}

export const BlueTheme: ThemeConfig = { metabase, mantine }
