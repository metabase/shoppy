import ReactDOM from "react-dom/client"
import { MantineProvider } from "@mantine/core"

import "@mantine/core/styles.css"

import { Routes } from "./routes"
import { theme } from "./constants/theme"

import "./styles/index.css"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <MantineProvider theme={theme}>
    <Routes />
  </MantineProvider>,
)
