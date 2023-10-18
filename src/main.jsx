import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.jsx";
import Authprovider from "./Provider/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <RouterProvider router={Router}></RouterProvider>
  </Authprovider>
);
