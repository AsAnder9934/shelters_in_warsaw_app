import React from "react";
import background from "./src/home_background.jpeg";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu_02">
      <img className="background_01" src={background} alt="background"></img>
      <div className="transparency_02">
        <div className="title_02">MENU GEOPORTALU</div>
        <line className="line_02"></line>
      </div>
    </div>
  );
}

export default Menu;
