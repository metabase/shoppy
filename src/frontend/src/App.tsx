import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login";
import Demo from "./components/Demo";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Demo />} />
      </Routes>
    </MantineProvider>
  );
}
