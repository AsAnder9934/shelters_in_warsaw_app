import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, LayersControl, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./Bemowo.css";

const PragaPoludnie = ({ districtName = "Praga-Południe - dzielnica" }) => {
  const sheltersUrls = [
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_budynki&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_odleglosc_150m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_cieplownicza_10m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_gazowa_10m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_gazowa_50m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters:warszawa_elektroenergetyczna_10m&maxFeatures=500&outputFormat=application/json&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters:warszawa_kanalizacyjna_10m&maxFeatures=500&outputFormat=application/json&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_wodociagowa_10m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_dodatkowe_bdot10k_100m&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_luzna_zabudowa&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_srednio_gesta_zabudowa&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_zabudowa_gesta&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_tereny_wylaczone&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
    `http://127.0.0.1:8080/geoserver/shelters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shelters%3Awarszawa_gminy_granica&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=nazwajedno='${districtName}'`,
  ];

  // Stan dla nowych danych
  const [sheltersData, setSheltersData] = useState([]);

  // Pobieranie danych z linków WFS
  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const responses = await Promise.all(
          sheltersUrls.map((url) => axios.get(url))
        );
        const allData = responses.map((response) => response.data.features);
        setSheltersData(allData);
      } catch (error) {
        console.error("Error loading shelters data:", error);
      }
    };

    fetchShelters();
  }, [districtName]);

  const getLayerStyle = (index) => {
    const styles = [
      { color: "red", fillOpacity: 0.5 }, // Budynki
      { color: "green", fillOpacity: 0.3 }, // Odleglosc 150m
      { color: "pink", fillOpacity: 0.6 }, // Cieplownicza
      { color: "yellow", fillOpacity: 0.4 }, // Gazowa 10m
      { color: "yellow", fillOpacity: 0.5 }, // Gazowa 50m
      { color: "red", fillOpacity: 0.7 }, // Elektroenergetyczna
      { color: "brown", fillOpacity: 0.4 }, // Kanalizacyjna
      { color: "blue", fillOpacity: 0.5 }, // Wodociągowa
      { color: "grey", fillOpacity: 0.7 }, // Dodatkowe bdot
      { color: "green", fillOpacity: 0.6 }, // Luzna zabudowa
      { color: "yellow", fillOpacity: 0.7 }, // Srednio gest zabudowa
      { color: "orange", fillOpacity: 0.5 }, // Zabudowa gest
      { color: "red", fillOpacity: 0.4 }, // Tereny wylaczone
      { color: "black", fillOpacity: 0 }, // Granica
    ];
    return styles[index % styles.length];
  };

  const layerNames = [
    "Budynki",
    "Odległość od zabudowań do 150m",
    "Sieć ciepłownicza - 10m",
    "Sieć gazowa - 10m",
    "Sieć gazowa - 50m",
    "Sieć elektroenergetyczna",
    "Sieć kanalizacyjna",
    "Sieć wodociągowa",
    "Dodatkowe obiekty z BDOT10k - 100m",
    "Luźna zabudowa",
    "Zabudowa o średniej intensywności",
    "Zabudowa gęsta",
    "Tereny wyłączone",
    "Granica dzielnicy",
  ];

  return (
    <div className="district_06">
      <h1 className="title_06">{districtName}</h1>
      <div className="line_06"></div>
      <Link to="/menu/geoportal">
        <button className="back_02">DZIELNICE</button>
      </Link>

      <MapContainer
        className="map_06"
        center={[52.2388, 21.085]}
        zoom={13.5}
        style={{ height: "800px", width: "1200px" }}
      >
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satellite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>

          {sheltersData.map((data, index) => (
            <LayersControl.Overlay
              key={index}
              checked={index === 0 || index === 1 || index === 13}
              name={layerNames[index]}
            >
              {data.length > 0 && (
                <GeoJSON
                  data={{
                    type: "FeatureCollection",
                    features: data,
                  }}
                  style={{
                    color: getLayerStyle(index).color,
                    weight: 2,
                    opacity: 1,
                    fillColor: getLayerStyle(index).color,
                    fillOpacity: getLayerStyle(index).fillOpacity,
                  }}
                />
              )}
            </LayersControl.Overlay>
          ))}
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default PragaPoludnie;