import { createBrowserRouter } from "react-router-dom";
import Layout from "../Shared/Layout/Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>
    },
  ]);