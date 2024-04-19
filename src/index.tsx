import ReactDOM from "react-dom/client"

import { Routes } from "./routes/Routes"
import { AppProvider } from "./components/AppProvider"

import "./index.css"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <AppProvider>
    <Routes />
  </AppProvider>,
)
