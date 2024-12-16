import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { LocaleProvider } from "./LocaleContext";
import "./i18n";
import MouseContextProvider from "./context/mouse-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <LocaleProvider>
        <MouseContextProvider>
          <App />
        </MouseContextProvider>
      </LocaleProvider>
    </React.StrictMode>
  </BrowserRouter>
);
