import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import App from "./components/App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div id="main">
      <Nav />
      <App key="app" />
    </div>
  </StrictMode>
);
