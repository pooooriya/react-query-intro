import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/pages/aboutus";
import HomePage from "../components/pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
]);
