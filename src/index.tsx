import ReactDOM from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import { Provider as JotaiProvider } from "jotai"
import { QueryClientProvider } from "@tanstack/react-query"

import "@mantine/core/styles.css"

import { Routes } from "./routes"

import { queryClient } from "./utils/query-client"

import "./styles/index.css"

// CSS style overrides used for workarounds.
import "./styles/font-workaround.css"
import "./styles/smartscalar-workaround.css"
import "./styles/dashboard-workaround.css"
import { ThemeProvider } from "./components/ThemeProvider"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <JotaiProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  </JotaiProvider>,
)
