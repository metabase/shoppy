import { createTheme } from "@mantine/core"
import { MetabaseTheme } from "@metabase/embedding-sdk-react"

import { colorTuple } from "../utils/color-tuple"

export const theme = createTheme({
  fontFamily: "Lato, sans-serif",
  headings: { fontFamily: "Lato, sans-serif" },
})

export const metabaseTheme: MetabaseTheme = {
  fontFamily: "Lato, sans-serif",
  headings: { fontFamily: "Lato, sans-serif" },
  colors: {
    brand: colorTuple("hotpink"),
    "text-dark": colorTuple("hotpink"),
    "text-light": colorTuple("hotpink"),
  },
  other: {
    smartScalar: {
      value: { color: "yellow", fontSize: "2rem" },
      title: { color: "lime" },
    },
    headings: {
      sizes: {
        h1: { fontSize: "2.1rem" },
      },
    },
  },
}
