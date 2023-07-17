import React from "react";
import ReactDOM from "react-dom/client";
import "./polyfills";
import App from "./App";

import "normalize.css";


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Element with id \"root\" was not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
