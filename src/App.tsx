import { MetabaseProvider } from "@metabase/embedding-sdk-react";

import { Outlet } from "react-router-dom";
import { Welcome } from "./Welcome";
import { LogoutButton } from "./Logout";
import { FontSelector } from "./FontSelector";
import { StyleLeakFlag } from "./StyleLeakFlag/StyleLeakFlag";
import { ViewToggle } from "./ViewToggle/ViewToggle";
import { METABASE_API_KEY, METABASE_INSTANCE_URL } from "./config";
import { useState } from "react";
import {
  CustomClickAction
} from "@metabase/embedding-sdk-react/dist/frontend/src/metabase/visualizations/types/click-actions";

const config = {
  metabaseInstanceUrl: METABASE_INSTANCE_URL,
  font: "Inter",
  authType: "apiKey",
  apiKey: METABASE_API_KEY,
};

const plugins = {
  mapClickActions: (clickActions, clicked) => {
    const customAction: CustomClickAction = {
      buttonType: "horizontal",
      name: "client-custom-action",
      section: "custom",
      type: "custom",
      icon: "chevronright",
      title: "Hello from the click app!!!",
      onClick: (close) => {
        alert("it works! " + clicked.column?.name + " " + clicked.value);

        close();
      },
    };

    return [
      ...clickActions.filter(({ name }) => {
        if (clicked.column?.name === "TOTAL") {
          return false;
        }

        return true;
      }),
      customAction,
    ];
  }
}

const App = () => {
  const [font, setFont] = useState(config.font);

  return (
    <MetabaseProvider
      config={{
        ...config,
        font,
      }}
      plugins={}
    >
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
          <FontSelector value={font} setValue={setFont} />
          <StyleLeakFlag />
        </footer>
      </div>
    </MetabaseProvider>
  );
};

export default App;
