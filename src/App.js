import "./App.css";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/01_home/Home";
import Menu from "./components/02_menu/Menu";
import About from "./components/02a_about/About";
import Data from "./components/02b_data/Data";
import Geoportal from "./components/05_geoportal/Geoportal";
import District from "./components/06_district/District";
import Bemowo from "./components/06a_districts/Bemowo";
import Wola from "./components/06a_districts/Wola";
import Srodmiescie from "./components/06a_districts/Srodmiescie";
import Zoliborz from "./components/06a_districts/Zoliborz";
import Bielany from "./components/06a_districts/Bielany";
import Bialoleka from "./components/06a_districts/Bialoleka";
import PragaPolnoc from "./components/06a_districts/PragaPolnoc";
import PragaPoludnie from "./components/06a_districts/PragaPoludnie";
import Targowek from "./components/06a_districts/Targowek";

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
    path: "/menu/geoportal/:districtId",
    element: <District />,
  },
  {
    path: "/:districtId/bemowo",
    element: <Bemowo />,
  },
  {
    path: "/:districtId/wola",
    element: <Wola />,
  },
  {
    path: "/:districtId/srodmiescie",
    element: <Srodmiescie />,
  },
  {
    path: "/:districtId/zoliborz",
    element: <Zoliborz />,
  },
  {
    path: "/:districtId/bielany",
    element: <Bielany />,
  },
  {
    path: "/:districtId/bialoleka",
    element: <Bialoleka />,
  },
  {
    path: "/:districtId/pragapolnoc",
    element: <PragaPolnoc />,
  },
  {
    path: "/:districtId/pragapoludnie",
    element: <PragaPoludnie />,
  },
  {
    path: "/:districtId/targowek",
    element: <Targowek />,
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
