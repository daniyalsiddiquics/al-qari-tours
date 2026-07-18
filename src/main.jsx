
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React.StrictMode is a development-only helper that highlights
// potential problems (like unsafe lifecycle usage or side effects)
// by intentionally double-invoking some functions. It does NOT run
// in production, so it's safe to leave in — it only helps us catch
// bugs early during development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
