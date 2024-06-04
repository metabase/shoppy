import ReactDOM from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import { QueryClientProvider } from "@tanstack/react-query"

import "@mantine/core/styles.css"

import { Routes } from "./routes"
import { theme } from "./constants/theme"
import { queryClient } from "./utils/query-client"

import "./styles/index.css"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  </QueryClientProvider>,
)
