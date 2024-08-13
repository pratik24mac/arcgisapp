import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
