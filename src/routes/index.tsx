import { HashRouter, Route, Routes } from "react-router-dom";
import { lazyFn, lazyFnReal } from "./lazy";
import React from "react";

export default () => {
  console.log("object");
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={lazyFn(() => import("../pages/home/Home"))}
        ></Route>
        <Route
          path="/authen"
          element={lazyFnReal(() => import("../pages/authen/Authen"))}
        ></Route>
        {/* <Route
          path="/authen"
          element={lazyFn(() => import("../pages/authen/"))}
        ></Route> */}
      </Routes>
    </HashRouter>
  );
};
