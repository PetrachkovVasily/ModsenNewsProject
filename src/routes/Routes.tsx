import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "", element: <MainPage/> },
      { path: "*", element: <ErrorPage/> }
    ]
  }
])