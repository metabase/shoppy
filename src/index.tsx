import ReactDOM from "react-dom/client"

import { Provider as JotaiProvider } from "jotai"
import { QueryClientProvider } from "@tanstack/react-query"

import "@mantine/core/styles.css"

import { Routes } from "./routes"

import { queryClient } from "./utils/query-client"

import "./styles/index.css"

// CSS variables used for the demo app's themes.
import "./themes/variables.css"

// Theme overrides for each themes
import "./themes/acme.css"
import "./themes/stitch.css"
import "./themes/luminara.css"
import "./themes/pug.css"

// CSS style overrides used for workarounds.
import "./styles/smartscalar-workaround.css"
import "./styles/dashboard-workaround.css"
import "./styles/viz-workaround.css"

import { store } from "./store"

import { ThemeProvider } from "./components/ThemeProvider"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <JotaiProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  </JotaiProvider>,
)
