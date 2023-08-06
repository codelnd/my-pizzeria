import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const SortContext = React.createContext(null);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SortContext.Provider value={}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SortContext.Provider>
);
