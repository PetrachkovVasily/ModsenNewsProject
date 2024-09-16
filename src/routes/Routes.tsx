import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import { APP, ERROR, MAIN } from "@constants/routsPaths";

export const router = createBrowserRouter([
  {
    path: APP,
    element: <App />,
    children: [
      {
        path: MAIN,
        element: <MainPage />,
      },
      {
        path: ERROR,
        element: <ErrorPage />,
      },
    ],
  },
]);
