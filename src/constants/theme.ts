import { colorsTuple, createTheme } from "@mantine/core"

export const theme = createTheme({
  fontFamily: "Barlow, sans-serif",
  headings: { fontFamily: "Barlow, sans-serif" },
  colors: {
    blue: colorsTuple("#FF8002"),
    "text-dark": colorsTuple("white"),
    "text-light": colorsTuple("#373F53"),
  },
})
