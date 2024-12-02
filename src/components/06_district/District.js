import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./District.css";

const DistrictDetails = () => {
  const { districtId } = useParams();

  console.log("Dzielnica ID:", districtId);

  const mapData = {
    bemowo: {
      center: [52.252, 20.9262],
      zoom: 15,
      geoJsonData: "/path/to/bemowo.geojson",
      name: "BEMOWO",
    },
    wola: {
      center: [52.2296, 20.984],
      zoom: 15,
      geoJsonData: "/path/to/wola.geojson",
      name: "WOLA",
    },
    ochota: {
      center: [52.2155, 20.9752],
      zoom: 15,
      geoJsonData: "/path/to/ochota.geojson",
      name: "OCHOTA",
    },
    ursus: {
      center: [52.1983, 20.9515],
      zoom: 15,
      geoJsonData: "/path/to/ursus.geojson",
      name: "URSUS",
    },
    wlochy: {
      center: [52.1843, 20.9613],
      zoom: 15,
      geoJsonData: "/path/to/wlochy.geojson",
      name: "WŁOCHY",
    },
    ursynow: {
      center: [52.134, 21.0511],
      zoom: 15,
      geoJsonData: "/path/to/ursynow.geojson",
      name: "URSYNÓW",
    },
    wilanow: {
      center: [52.1374, 21.029],
      zoom: 15,
      geoJsonData: "/path/to/wilanow.geojson",
      name: "WILANÓW",
    },
    pragapoludnie: {
      center: [52.2193, 21.1457],
      zoom: 15,
      geoJsonData: "/path/to/pragapoludnie.geojson",
      name: "PRAGA-POŁUDNIE",
    },
    wawer: {
      center: [52.1465, 21.1525],
      zoom: 15,
      geoJsonData: "/path/to/wawer.geojson",
      name: "WAWER",
    },
    wesola: {
      center: [52.2256, 21.2097],
      zoom: 15,
      geoJsonData: "/path/to/wesola.geojson",
      name: "WESOŁA",
    },
    rembertow: {
      center: [52.2584, 21.1479],
      zoom: 15,
      geoJsonData: "/path/to/rembertow.geojson",
      name: "REMBERTÓW",
    },
    targowek: {
      center: [52.2803, 21.0181],
      zoom: 15,
      geoJsonData: "/path/to/targowek.geojson",
      name: "TARGÓWEK",
    },
    pragapolnoc: {
      center: [52.2592, 21.0336],
      zoom: 15,
      geoJsonData: "/path/to/pragapolnoc.geojson",
      name: "PRAGA-PÓŁNOC",
    },
    zoliborz: {
      center: [52.2766, 20.97],
      zoom: 15,
      geoJsonData: "/path/to/zoliborz.geojson",
      name: "ŻOLIBORZ",
    },
    bielany: {
      center: [52.3124, 20.9844],
      zoom: 15,
      geoJsonData: "/path/to/bielany.geojson",
      name: "BIELANY",
    },
    bialoleka: {
      center: [52.3373, 21.0594],
      zoom: 15,
      geoJsonData: "/path/to/bialoleka.geojson",
      name: "BIAŁOŁĘKA",
    },
    srodmiescie: {
      center: [52.2298, 21.0118],
      zoom: 15,
      geoJsonData: "/path/to/srodmiescie.geojson",
      name: "SRÓDMIEŚCIE",
    },
    mokotow: {
      center: [52.19, 21.033],
      zoom: 15,
      geoJsonData: "/path/to/mokotow.geojson",
      name: "MOKOTÓW",
    },
  };

  const district = mapData[districtId];

  if (!district) {
    return <div>Dzielnica nieznana: {districtId}</div>;
  }

  return (
    <div className="district_06">
      <h1 className="title_06">{district.name}</h1>
      <div className="line_06"></div>
      <MapContainer
        className="map_06"
        center={district.center}
        zoom={district.zoom}
        style={{ height: "800px", width: "1200px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON url={district.geoJsonData} />
      </MapContainer>
    </div>
  );
};

export default DistrictDetails;
