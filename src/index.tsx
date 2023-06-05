import React from "react";
import RootDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./store/app-provider";

const container = document.getElementById("root");
RootDOM.createRoot(container as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
