import React from "react";
import RootDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
RootDOM.createRoot(container as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
