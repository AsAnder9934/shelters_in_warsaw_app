import React from "react";
import background from "./src/home_background.jpeg";
import about_icon from "./src/info.svg";
import data_icon from "./src/data.svg";
import map_icon from "./src/map.svg";
import shelter_icon from "./src/shelter.svg";
import "./Menu.css";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  return (
    <div className="menu_02">
      <img className="background_01" src={background} alt="background"></img>
      <div className="transparency_02">
        <Link to="/">
          <button className="back_02">POWRÓT</button>
        </Link>
        <div className="title_02">MENU GEOPORTALU</div>
        <line className="line_02"></line>
        <div className="button1_02">
          <img
            className="about_icon_02"
            src={about_icon}
            alt="about_icon"
          ></img>
          <Link to="about">
            <button className="about_02">O PROJEKCIE</button>
          </Link>
        </div>
        <div className="button2_02">
          <img className="data_icon_02" src={data_icon} alt="data_icon"></img>
          <Link to="/menu/data">
            <button className="data_02">DANE</button>
          </Link>
        </div>
        <div className="button3_02">
          <img className="map_icon_02" src={map_icon} alt="map-icon"></img>
          <Link to="/menu/geoportal">
            <button className="geoportal_02">GEOPORTAL</button>
          </Link>
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
