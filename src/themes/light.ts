import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"
import { ThemeConfig } from "../types/theme"

const mantine: MantineThemeOverride = {
  fontFamily: "Barlow, sans-serif",
  headings: { fontFamily: "Barlow, sans-serif" },
  primaryColor: "primary",
  colors: {
    primary: t("#E09862"),
    "accent-lighter": t("#E3E7E4"),
    "lighter-grey": t("#E3E7E4"),
    "light-grey": t("#ADABA9"),
    "dark-grey": t("#3B3F3F"),
    background: t("#F6F5F1"),
    white: t("#ffffff"),
  },
  activeClassName: "",
}

const metabase: MetabaseTheme = {
  fontFamily: "Custom",
  fontSize: "14px",
  colors: {
    brand: "#E09862",
    filter: "#7ABBF9",
    "text-primary": "#3B3F3F",
    "text-secondary": "#222222",
    "text-tertiary": "#222222",
    border: "#3B3F3F",
    background: "#F6F5F1",
    "background-hover": "#F6F5F1",
    charts: ["#64786A", "#7ABBF9", "#ED6A5A", "#FED18C", "#82A74B", "#FF8D69"],
    positive: "#64786A",
    negative: "#FF0F00",
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

export const LightTheme: ThemeConfig = { metabase, mantine }
