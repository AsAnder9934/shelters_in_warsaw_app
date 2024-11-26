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
        <div className="button1_02">
          <button className="about_02">O PROJEKCIE</button>
        </div>
        <div className="button2_02">
          <button className="data_02">DANE</button>
        </div>
        <div className="button3_02">
          <button className="geoportal_02">GEOPORTAL</button>
        </div>
        <div className="button4_02">
          <button className="psp_shelters_02">SCHRONY PSP</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
