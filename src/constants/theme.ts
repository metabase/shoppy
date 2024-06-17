import { colorsTuple, createTheme } from "@mantine/core"

export const theme = createTheme({
  fontFamily: "Roboto Slab, sans-serif",
  headings: { fontFamily: "Roboto Slab, sans-serif" },
  colors: {
    blue: colorsTuple("#FF8002"),
    "text-dark": colorsTuple("white"),
    "text-light": colorsTuple("#373F53"),
  },
})
