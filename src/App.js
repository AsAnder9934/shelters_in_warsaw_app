import "./App.css";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/01_home/Home";
import Menu from "./components/02_menu/Menu";
import About from "./components/02a_about/About";
import Data from "./components/02b_data/Data";
import Geoportal from "./components/05_geoportal/Geoportal";
import District from "./components/06_district/District";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/about",
    element: <About />,
  },
  {
    path: "/menu/data",
    element: <Data />,
  },
  {
    path: "/menu/geoportal",
    element: <Geoportal />,
  },
  {
    path: "/district/:districtId",
    element: <District />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
        // showPassword={showPassword}
        // handleChange={handleChange}
        // togglePasswordVisibility={togglePasswordVisibility}
      />
    </div>
  );
}

export default App;
