import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalContextProvider } from "./Providers/Global/GlobalContextProvider.tsx";
import "./index.css";
import { Providers } from "./Providers/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
