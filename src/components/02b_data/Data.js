import React from "react";
import "./Data.css";
import { Link, useNavigate } from "react-router-dom";

function Data() {
  return (
    <div className="data02b">
      <div className="mid_02a">
        <Link to="/menu">
          <button className="back_02">MENU</button>
        </Link>
        <div className="about2_02a">Dane wykorzystane w projekcie</div>
        <line className="line_02a"></line>
        <text className="information1_02a">
          Do zrealizowania przyjętych założeń metodycznych, a także wiarygodnego
          wskazania miejsc do tworzenia budowli ochronnych korzystano z
          oficjalnych źródeł danych. Były to zarówno instytucje polskie, jak i
          europejskie, udostępniające dane nieodpłatnie.
        </text>
        <text className="information2_02a">
          Program Copernicus: <br /> 1) Urban Atlas Land Cover/Land Use <br />
          2) Global Human Settlement Layer
          <br />
          <br />
          Państwowy zasób geodezyjny i kartograficzny <br /> 1) NMT oraz NMPT
          <br /> 2) BDOT10k <br /> 3)Sieć Uzbrojenia Ternu <br /> <br />
          <br />
          Hydroportal <br />
          1) ryzyko związane z powodziami rzecznymi
        </text>
      </div>
    </div>
  );
}

export default Data;
