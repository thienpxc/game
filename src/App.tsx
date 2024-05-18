import { createRoot } from "react-dom/client";
import Root from "./root";
import React from "react";

declare global {
  interface Window {
    __REACT_ROOT: any;
  }
}
const root = createRoot(document.getElementById("root"));
root.render(<Root />);
