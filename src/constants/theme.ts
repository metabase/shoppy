import { createTheme } from "@mantine/core"
import type { MetabaseTheme } from "@metabase/embedding-sdk-react"

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
      value: {
        color: "#12CBC4",
        fontSize: "1.8rem",
        lineHeight: 1.1,
      },
      variationPercent: {
        color: "#FDA7DF",
        fontSize: "0.9rem",
      },
      previousValue: {
        text: {
          color: "white",
          fontSize: "0.9rem",
        },
        number: {
          color: "#12CBC4",
          fontSize: "0.9rem",
        },
      },
    },
    headings: {
      sizes: {
        h1: { fontSize: "2.1rem" },
      },
    },
  },
}
