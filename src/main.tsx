import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/tailwind.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Root container not found! Did you forget to add <div id='root' /> to index.html?",
  );
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
