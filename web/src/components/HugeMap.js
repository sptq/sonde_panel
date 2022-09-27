import React from 'react';
import { MapContainer, Polyline, ScaleControl, TileLayer } from "react-leaflet";
import { MapMarker } from "./MapMarker";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';


export const HugeMap = (props) => {

  const buildMarkers = () => {
    return props.data.map((sonde, index) => {
      return (
        <>
          <MapMarker {...sonde} showGOTO key={`m-${sonde.latitude}${sonde.longitude}`}/>
          <Polyline positions={sonde.positions} pathOptions={{ color: sonde.color }}  key={`pl-${sonde.latitude}${sonde.longitude}`}/>
        </>)
    })
  }

  return (
    <MapContainer
      center={props.position}
      zoom={10}
      scrollWheelZoom={true}
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