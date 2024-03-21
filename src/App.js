import { MetabaseProvider } from "metabase-embedding-sdk";

import { Outlet } from "react-router-dom";
import { Welcome } from "./Welcome";
import { LogoutButton } from "./Logout";
import { FontSelector } from "./FontSelector";
import { StyleLeakFlag } from "./StyleLeakFlag/StyleLeakFlag";
import { ViewToggle } from "./ViewToggle/ViewToggle";
import { METABASE_API_KEY, METABASE_INSTANCE_URL } from "./config";

const config = {
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  font: "Inter",
  authType: "apiKey",
  apiKey: METABASE_API_KEY,
};

const App = () => {
  return (
    <MetabaseProvider config={config}>
      <div className="Page--container">
        <header className="Page--header">
          <Welcome />
          <ViewToggle />
          <LogoutButton />
        </header>

        <div className="tw-flex-1 tw-overflow-scroll">
          <Outlet />
        </div>

        <footer className="Page--footer">
          <FontSelector />
          <StyleLeakFlag />
        </footer>
      </div>
    </MetabaseProvider>
  );
};

export default App;
