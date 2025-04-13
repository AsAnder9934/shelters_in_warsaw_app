import React, { useState } from "react";
import "./Geoportal.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as WarsawMap } from "./src/warsaw-mapp.svg";

function Geoportal() {
  const navigate = useNavigate();
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  const districtNames = {
    bemowo: "BEMOWO",
    wola: "WOLA",
    ochota: "OCHOTA",
    ursus: "URSUS",
    wlochy: "WŁOCHY",
    ursynow: "URSYNÓW",
    wilanow: "WILANÓW",
    pragapoludnie: "PRAGA-POŁUDNIE",
    wawer: "WAWER",
    wesola: "WESOŁA",
    rembertow: "REMBERTÓW",
    targowek: "TARGÓWEK",
    pragapolnoc: "PRAGA-PÓŁNOC",
    zoliborz: "ŻOLIBORZ",
    bielany: "BIELANY",
    bialoleka: "BIAŁOŁĘKA",
    srodmiescie: "ŚRÓDMIEŚCIE",
    mokotow: "MOKOTÓW",
  };

  const handleDistrictClick = (event) => {
    const clickedElement = event.target;

    if (
      ["path", "text"].includes(clickedElement.tagName) &&
      clickedElement.id
    ) {
      navigate(`/district/${clickedElement.id}`);
    }
  };

  const handleDistrictHover = (event) => {
    const hoveredElement = event.target;

    if (
      ["path", "text"].includes(hoveredElement.tagName) &&
      hoveredElement.id
    ) {
      setHoveredDistrict(
        districtNames[hoveredElement.id] || "Nieznana dzielnica"
      );
    } else {
      setHoveredDistrict("");
    }
  };

  return (
    <div className="geoportal_05">
      <button className="back_02" onClick={() => navigate("/menu")}>
        MENU
      </button>
      <div className="map_05">
        <div className="title_05">Dzielnice Warszawy</div>
        <div className="line_05"></div>
        {hoveredDistrict && (
          <div className="hovered_district_05">{hoveredDistrict}</div>
        )}
        <WarsawMap
          className="map_svg"
          onClick={handleDistrictClick}
          onMouseOver={handleDistrictHover}
          onMouseOut={() => setHoveredDistrict("")}
        />
      </div>
      <div className="description_05">
        Wybierz klikając na jedną z nich, aby wyświetlić dane.
      </div>
    </div>
  );
}

export default Geoportal;
