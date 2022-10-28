import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

// create container
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
