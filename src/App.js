import "./App.css";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/01_home/Home";
import Menu from "./components/02_menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
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
