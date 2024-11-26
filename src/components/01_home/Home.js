import React from "react";
import background from "./src/home_background.jpeg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_01">
      <img className="background_01" src={background} alt="background"></img>
      <div className="transparency_01">
        <div className="title_01">
          Wyznaczenie potencjalnej lokalizacji schronów na terenie Warszawy
        </div>
        <div className="eng_title_01">
          Determining the potential location of shelters in Warsaw
        </div>
        <Link to="menu">
          <button className="button_next_01">Wchodzę</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
