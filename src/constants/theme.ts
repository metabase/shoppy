import { colorsTuple, createTheme } from "@mantine/core"

export const theme = createTheme({
  fontFamily: "Barlow, sans-serif",
  headings: { fontFamily: "Barlow, sans-serif" },
  primaryColor: "primary",
  colors: {
    primary: colorsTuple("#FF8000"),
    "accent-lighter": colorsTuple("#FFEDDB"),
    "accent-light": colorsTuple("#FFD3A7"),
    "lighter-grey": colorsTuple("#F0F0F0"),
    "light-grey": colorsTuple("#ADABA9"),
    "light-blue": colorsTuple("#CBE2F7"),
    "dark-grey": colorsTuple("#4C4A48"),
    "dark-orange": colorsTuple("#572B00"),
    "dark-background": colorsTuple("#212121"),
    white: colorsTuple("#ffffff"),
  },
})
