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
  fontFamily: "DM Mono",
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
    "background-disabled": colors.lighterGrey,
    charts: [
      colors.primary,
      colors.negative,
      "#ECB405",
      "#BD37C9",
      colors.positive,
      "#545455",
      colors.primary,
      colors.negative,
    ],
    positive: colors.positive,
    negative: colors.negative,
  },
  components: {
    tooltip: {
      /** Tooltip text color. */
      textColor: colors.darkGrey,

      /** Secondary text color shown in the tooltip, e.g. for tooltip headers and percentage changes. */
      secondaryTextColor: colors.darkGrey,

      /** Tooltip background color. */
      backgroundColor: colors.background,

      /** Tooltip background color for focused rows. */
      focusedBackgroundColor: colors.lighterGrey,
    },
    cartesian: {
      padding: "6px 16px",
    },
    dashboard: {
      card: {
        border: "1px solid var(--mantine-color-gray-3)",
      },
    },
    number: {
      value: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
    popover: {
      zIndex: 201,
    },
  },
}

export const PugSite: SiteConfig = { metabase, mantine }
