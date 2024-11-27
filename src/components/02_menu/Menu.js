import React from "react";
import background from "./src/home_background.jpeg";
import about_icon from "./src/info.svg";
import data_icon from "./src/data.svg";
import map_icon from "./src/map.svg";
import shelter_icon from "./src/shelter.svg";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu_02">
      <img className="background_01" src={background} alt="background"></img>
      <div className="transparency_02">
        <div className="title_02">MENU GEOPORTALU</div>
        <line className="line_02"></line>
        <div className="button1_02">
          <img
            className="about_icon_02"
            src={about_icon}
            alt="about_icon"
          ></img>
          <button className="about_02">O PROJEKCIE</button>
        </div>
        <div className="button2_02">
          <img className="data_icon_02" src={data_icon} alt="data_icon"></img>
          <button className="data_02">DANE</button>
        </div>
        <div className="button3_02">
          <img className="map_icon_02" src={map_icon} alt="map-icon"></img>
          <button className="geoportal_02">GEOPORTAL</button>
        </div>
        <div className="button4_02">
          <img
            className="shelter_icon_02"
            src={shelter_icon}
            alt="shelter_icon"
          ></img>
          <button className="psp_shelters_02">SCHRONY PSP</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
