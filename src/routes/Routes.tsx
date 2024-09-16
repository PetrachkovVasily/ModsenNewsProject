import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { APP, ERROR, MAIN } from "@constants/routsPaths";
import { Loader } from "@components/Loader";

const ErrorPage = React.lazy(() => import("@pages/ErrorPage"));
const MainPage = React.lazy(() => import("@pages/MainPage"));
const App = React.lazy(() => import("../App/App"));

export const router = createBrowserRouter([
  {
    path: APP,
    element: (
      <React.Suspense fallback={<Loader />}>
        <App />
      </React.Suspense>
    ),
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
