import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Demo from "./components/Demo";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}
