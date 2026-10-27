import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap CSS + Icons (JS bundle isn't needed — Navbar handles
// its own collapse/scrollspy behavior with React state)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
