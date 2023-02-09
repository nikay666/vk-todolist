import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import '@vkontakte/vkui/dist/vkui.css';
import { AdaptivityProvider, ConfigProvider, SizeType } from "@vkontakte/vkui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider appearance="dark">
      <AdaptivityProvider sizeY={SizeType.REGULAR}>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
    ,
  </React.StrictMode>
);
