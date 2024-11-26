import React, { useState } from "react";
import background from "./src/home_background.jpeg";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="home_01">
      <img className="background_01" src={background} alt="background"></img>
      <div className="transparency_01">
        <Link to="menu">
          <button className="button_next_01">Wchodzę</button>
        </Link>
        <div className="title_01">
          Wyznaczenie potencjalnej lokalizacji schronów na terenie Warszawy
        </div>
        <div className="eng_title_01">
          Determining the potential location of shelters in Warsaw
        </div>
        <div className="dyplomant_01">Dyplomant</div>
        <div className="dyplomant_name_01">sierż. pchor. Maciej Malinowski</div>
        <div className="promotor_01">Promotor</div>
        <div className="promotor_name_01">
          dr hab. inż. Albina Mościcka prof. WAT
        </div>
      </div>
    </div>
  );
}

export default Home;
