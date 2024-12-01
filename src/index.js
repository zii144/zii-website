import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { LocaleProvider } from "./LocaleContext";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </React.StrictMode>
  </BrowserRouter>
);
