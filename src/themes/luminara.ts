import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"
import { SiteConfig } from "../types/site"

const colors = {
  primary: "#E09862",
  background: "#F6F5F1",
  green1: "#80877F",
  green2: "#4F5951",
  green3: "#323E35",
  viz1: "#64786A",
}

const mantine: MantineThemeOverride = {
  fontFamily: "var(--font-family-sans), sans-serif",
  headings: { fontFamily: "var(--font-family-sans), sans-serif" },
  primaryColor: "primary",
  colors: {
    primary: t(colors.primary),
    "accent-lighter": t(colors.green1),
    "lighter-grey": t(colors.green1),
    "light-grey": t(colors.green2),
    "dark-grey": t(colors.green3),
    background: t(colors.background),
    white: t("#ffffff"),
  },
  activeClassName: "",
}

const metabase: MetabaseTheme = {
  fontFamily: "Arsenal",
  fontSize: "14px",
  colors: {
    brand: colors.primary,
    "brand-hover": "#fff",
    "brand-hover-light": "#fff",
    filter: colors.viz1,
    summarize: "#BE54C0",
    "text-primary": colors.green3,
    "text-secondary": colors.green3,
    "text-tertiary": colors.green3,
    border: colors.green1,
    background: colors.background,
    "background-secondary": colors.background,
    "background-hover": colors.background,
    "background-disabled": "#d6d6d6",
    charts: [
      colors.viz1,
      "#E09862",
      "#BE54C0",
      "#DDA51F",
      "#B34332",
      "#4998E3",
      "#BE54C0",
      "#DDA51F",
    ],
    positive: colors.green3,
    negative: "#B34332",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  components: {
    cartesian: {
      padding: "6px 16px",
    },
    dashboard: {
      backgroundColor: "transparent",
    },
    number: {
      value: {
        fontSize: "36px",
        lineHeight: "36px",
      },
    },
    tooltip: {
      /** Tooltip text color. */
      textColor: colors.green3,

      /** Secondary text color shown in the tooltip, e.g. for tooltip headers and percentage changes. */
      secondaryTextColor: colors.green3,

      /** Tooltip background color. */
      backgroundColor: colors.background,

      /** Tooltip background color for focused rows. */
      focusedBackgroundColor: colors.viz1,
    },
    popover: {
      zIndex: 201,
    },
  },
}

export const LuminaraSite: SiteConfig = { metabase, mantine }
