import ReactDOM from "react-dom/client"

import { Routes } from "./routes"
import { AppProvider } from "./components/AppProvider"

import "@mantine/core/styles.css"

import "./styles/index.css"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <AppProvider>
    <Routes />
  </AppProvider>,
)
