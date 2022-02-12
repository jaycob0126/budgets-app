import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./components/styles/global/index.css";
import AppContextProvider from "./context/AppContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
