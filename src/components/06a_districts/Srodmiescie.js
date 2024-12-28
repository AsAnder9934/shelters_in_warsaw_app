import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, LayersControl, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./Bemowo.css";

const Srodmiescie = () => {
  const districtData = {
    name: "Śródmieście",
    overlays: [
      {
        name: "Budynki",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_budynki&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci gazowej do 50m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_gazowa_50m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci gazowej do 10m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_gazowa_10m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci ciepłowniczej do 10m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_cieplownicza_10m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci elektroenergetycznej do 10m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_elektroenergetyczna_10m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci wodociągowej do 10m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_wodociagowa_10m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od sieci kanalizacyjnej do 10m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_kanalizacyjna_10m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od instalacji BDOT10k do 100m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_dodatkowe_bdot10k&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Odległość od zabudowy do 150m",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_odleglosc_150m&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Zabudowa gęsta",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_zabudowa_gesta&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Zabudowa średnio gęsta",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_srednio_gesta_zabudowa&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Zabudowa luźna",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_luzna_zabudowa&maxFeatures=50&outputFormat=application%2Fjson",
      },
      {
        name: "Tereny wyłączone",
        url: "http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Asrodmiescie_tereny_wylaczonee&maxFeatures=50&outputFormat=application%2Fjson",
      },
    ],
  };

  const [overlayData, setOverlayData] = useState([]);

  useEffect(() => {
    const fetchOverlays = async () => {
      const promises = districtData.overlays.map((overlay) =>
        axios
          .get(overlay.url)
          .then((response) => ({ name: overlay.name, data: response.data }))
          .catch((error) =>
            console.error(`Error loading overlay ${overlay.name}:`, error)
          )
      );
      const results = await Promise.all(promises);
      setOverlayData(results);
    };

    fetchOverlays();
  }, [districtData.overlays]);

  const getOverlayStyle = (name) => {
    switch (name) {
      case "Budynki":
        return {
          color: "red",
          weight: 2,
          opacity: 1,
          fillColor: "red",
          fillOpacity: 1,
        };

      case "Odległość od sieci gazowej do 50m":
        return {
          color: "yellow",
          weight: 2,
          opacity: 1,
          fillColor: "yellow",
          fillOpacity: 0.3,
        };
      case "Odległość od sieci gazowej do 10m":
        return {
          color: "yellow",
          weight: 2,
          opacity: 1,
          fillColor: "yellow",
          fillOpacity: 0.3,
        };
      case "Odległość od sieci ciepłowniczej do 10m":
        return {
          color: "pink",
          weight: 2,
          opacity: 1,
          fillColor: "pink",
          fillOpacity: 0.3,
        };
      case "Odległość od sieci elektroenergetycznej do 10m":
        return {
          color: "red",
          weight: 2,
          opacity: 1,
          fillColor: "red",
          fillOpacity: 0.3,
        };
      case "Odległość od sieci wodociągowej do 10m":
        return {
          color: "blue",
          weight: 2,
          opacity: 1,
          fillColor: "blue",
          fillOpacity: 0.3,
        };
      case "Odległość od sieci kanalizacyjnej do 10m":
        return {
          color: "brown",
          weight: 2,
          opacity: 1,
          fillColor: "brown",
          fillOpacity: 0.3,
        };
      case "Odległość od instalacji BDOT10k do 100m":
        return {
          color: "orange",
          weight: 2,
          opacity: 1,
          fillColor: "orange",
          fillOpacity: 0.3,
        };
      default:
        return {
          color: "blue",
          weight: 2,
          opacity: 1,
          fillColor: "blue",
          fillOpacity: 0.5,
        };
      case "Odległość od zabudowy do 150m":
        return {
          color: "green",
          weight: 2,
          opacity: 1,
          fillColor: "green",
          fillOpacity: 0.4,
        };
      case "Zabudowa gęsta":
        return {
          color: "orange",
          weight: 2,
          opacity: 1,
          fillColor: "orange",
          fillOpacity: 0.4,
        };
      case "Zabudowa średnio gęsta":
        return {
          color: "yellow",
          weight: 2,
          opacity: 1,
          fillColor: "yellow",
          fillOpacity: 0.4,
        };
      case "Zabudowa luźna":
        return {
          color: "green",
          weight: 2,
          opacity: 1,
          fillColor: "green",
          fillOpacity: 0.4,
        };
      case "Tereny wyłączone":
        return {
          color: "red",
          weight: 2,
          opacity: 1,
          fillColor: "red",
          fillOpacity: 0.4,
        };
    }
  };

  return (
    <div className="district_06">
      <h1 className="title_06">{districtData.name}</h1>
      <div className="line_06"></div>
      <Link to="/menu/geoportal">
        <button className="back_02">DZIELNICE</button>
      </Link>

      <MapContainer
        className="map_06"
        center={[52.234, 21.012]}
        zoom={13.4}
        style={{
          height: "800px",
          width: "1200px",
        }}
      >
        <LayersControl className="layers_06a">
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satellite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          {overlayData.map((overlay, index) => (
            <LayersControl.Overlay
              key={index}
              name={overlay.name}
              checked={
                overlay.name === "Odległość od zabudowy do 150m" ||
                overlay.name === "Budynki"
              }
            >
              {overlay.data && (
                <GeoJSON
                  data={overlay.data}
                  style={() => getOverlayStyle(overlay.name)}
                />
              )}
            </LayersControl.Overlay>
          ))}
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Srodmiescie;
