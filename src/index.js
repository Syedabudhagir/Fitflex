import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of ReactDOM
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);