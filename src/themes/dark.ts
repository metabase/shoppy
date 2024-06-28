import { colorsTuple as t, MantineThemeOverride } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"
import { ThemeConfig } from "../types/theme"

const mantine: MantineThemeOverride = {
  fontFamily: "Barlow, sans-serif",
  headings: { fontFamily: "Barlow, sans-serif" },
  primaryColor: "primary",
  colors: {
    primary: t("#FF8000"),
    "accent-lighter": t("#FFEDDB"),
    "accent-light": t("#FFD3A7"),
    "lighter-grey": t("#F0F0F0"),
    "light-grey": t("#ADABA9"),
    "light-blue": t("#CBE2F7"),
    "dark-grey": t("#4C4A48"),
    "dark-orange": t("#572B00"),
    "dark-background": t("#212121"),
    white: t("#ffffff"),
  },
  activeClassName: "",
}

const metabase: MetabaseTheme = {
  fontFamily: "Custom",
  fontSize: "14px",
  colors: {
    brand: "#FF8000",
    filter: "#00D9CC",
    "text-primary": "#F8F7F7",
    "text-secondary": "#F8F7F7",
    "text-tertiary": "#F8F7F7",
    border: "#4C4A48",
    background: "#212121",
    "background-hover": "#4C4A48",
    charts: ["#00D9CC"],
    positive: "#4AC40E",
    negative: "#FF0F00",
  },
  components: {
    cartesian: {
      padding: "4px 10px",
    },
    dashboard: {
      card: {
        border: "1px solid #4C4A48",
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

export const DarkTheme: ThemeConfig = { metabase, mantine }
