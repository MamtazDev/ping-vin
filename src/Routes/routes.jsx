import { createBrowserRouter } from "react-router-dom";
import Layout from "../Shared/Layout/Layout";
import Home from "../components/Home/Home";
import AboutUs from "./../pages/AboutUs/AboutUs";
import BrandProtection from "./../pages/BrandProtection/BrandProtection";
import Consultancy from "./../pages/Consultancy/Consultancy";
import OurProduct from "./../pages/OurProduct/OurProduct";
import ContactUs from "../pages/ContactUs/ContactUs";

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
      {
        path: "/branprotection",
        element: <BrandProtection />,
      },
      {
        path: "/consultancy",
        element: <Consultancy />,
      },
      {
        path: "/ourProduct",
        element: <OurProduct />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
