import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascripte from "./pages/Javascripte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Erorr.....</h1>,
  },
  {
    path: "/Html",
    element: <Html />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/Javascripte",
    element: <Javascripte />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
