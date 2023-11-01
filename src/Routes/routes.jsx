import { createBrowserRouter } from "react-router-dom";
import Layout from "../Shared/Layout/Layout";
import Home from "../components/Home/Home";

import AboutUs from './../pages/AboutUs/AboutUs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
