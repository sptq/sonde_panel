import React from 'react';
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";


export const MapMarker = (props) => {
  const { latitude, longitude, altitude, speed, name, distance, climb, dir, freq, showGOTO } = props;
  const position = [parseFloat(latitude), parseFloat(longitude)];
  const title = showGOTO ? <Link to={`/sonde/${name}`}>{name}</Link> : name;

  return (
    <Marker position={position}>
      <Popup>
        <b>{title}</b><br/>
        Lat: {latitude} &nbsp; &nbsp; Lon: {longitude} <br/>
        Alt: {altitude}m &nbsp;&nbsp; Vel: {speed}m/s <br/>
        Dist: {distance}km &nbsp;&nbsp; Dir: {dir}° <br/>
        Climb: {climb}m/s &nbsp;&nbsp; Freq: {freq}MHz <br/>
      </Popup>
    </Marker>
  )
}