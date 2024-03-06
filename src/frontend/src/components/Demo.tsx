import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "./Navbar";
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";

function Demo() {
  const [opened, { toggle }] = useDisclosure();

  const handleOnAnalytics = () => {
    console.log("Analytics clicked");
  };

  const { authenticated } = useContext(AuthContext);
  if (!authenticated) return <Navigate to="/login" replace />;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar onAnalyticsClick={handleOnAnalytics} />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default Demo;
