import { colorsTuple, createTheme } from "@mantine/core"

export const theme = createTheme({
  fontFamily: "Lato, sans-serif",
  headings: { fontFamily: "Lato, sans-serif" },
  colors: {
    blue: colorsTuple("#FF8002"),
    "text-dark": colorsTuple("white"),
    "text-light": colorsTuple("#373F53"),
  },
})
