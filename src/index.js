import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { LocaleProvider } from "./LocaleContext";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
