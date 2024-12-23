import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

import { SiteConfig } from "../types/site"

const colors = {
  primary: "rgba(106, 87, 201, 1)",
  lighterGrey: "#D1CFC5",
  lightGrey: "#545455",
  darkGrey: "#1B1C21",
  background: "#fcfdfd",
  positive: "rgba(0, 143, 93, 1)",
  negative: "rgba(234, 56, 41, 1)",
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
  fontFamily: "Figtree",
  fontSize: "14px",
  colors: {
    brand: colors.primary,
    filter: colors.primary,
    "text-primary": colors.darkGrey,
    "text-secondary": colors.lightGrey,
    "text-tertiary": colors.lightGrey,
    border: "#3B3F3F",
    background: colors.background,
    "background-hover": "#fcfdfd",
    "background-disabled": colors.lighterGrey,
    charts: [
      colors.primary,
      "rgba(37, 90, 157, 1)",
      "rgba(182, 89, 166, 1)",
      colors.primary,
      "rgba(238, 92, 127, 1)",
      "rgba(240, 115, 76, 1)",
      "rgba(243, 161, 26, 1)",
      "rgba(182, 89, 166, 1)",
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
        border: "1px solid #fcfdfd",
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

export const AcmeSite: SiteConfig = { metabase, mantine }
