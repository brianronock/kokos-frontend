import React from "react";

// Pages
import LandingPage from "../pages/LandingPage";
//import Login from "../pages/Login";
//import Dashboard from "../pages/Dashboard.jsx";
import { createBrowserRouter } from "react-router-dom";
// to add more pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
  // to add more routes..
]);

export default router;