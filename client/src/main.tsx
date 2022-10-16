import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Eror from "./components/Eror";
import Home from "./components/Home";
import Form from "./components/Form";
import Work from "./components/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Eror />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Work/>,
      },
      {
        path: "/hire-me",
        element: <Form/>,
        // action: rootAction,
      },
    ],
  },
  {
    path:'/adminprv',
    element: <h1>hello admin</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
