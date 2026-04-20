import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import App from "../App";
import Contactus from "../Pages/Contactus";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AboutLayout from "../Layout/AboutLayout";
import AboutChild1 from "../Pages/About/AboutChild1";
import AboutChild2 from "../Pages/About/AboutChild2";
import Products from "../Pages/Products";
import ProductLayout from "../Layout/ProductLayout";
import Productid from "../Pages/Productid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          { index: true, element: <About /> },
          { path: "aboutchild1", element: <AboutChild1 /> },
          { path: "aboutchild2", element: <AboutChild2 /> },
        ],
      },
      { path: "contact", element: <Contactus /> },
      { path: "privacypolicy", element: <PrivacyPolicy /> },
      {
        path: "product",
        element: <ProductLayout />,
        children: [
          { index: true, element: <Products /> },
          { path: ":id", element: <Productid /> },
        ],
      },
    ],
  },
]);
