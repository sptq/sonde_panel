import React from 'react';
import { MapContainer, ScaleControl, TileLayer } from "react-leaflet";
import { MapMarker } from "./MapMarker";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';


export const HugeMap = (props) => {

  const buildMarkers = () => {
    return props.data.map((sonde, index) => {
      return <MapMarker key={index} {...sonde} showGOTO />
    })
  }

  return (
    <MapContainer
      center={props.position}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={props.url}
      />

      {buildMarkers()}

      <ScaleControl />
    </MapContainer>
  )
}