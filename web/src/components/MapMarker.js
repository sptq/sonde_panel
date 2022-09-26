import React from 'react';
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

import L from "leaflet";
import dayjs from "dayjs";

const greenIcon = new L.Icon({ iconUrl: '/marker-icon-green.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]})
const blackIcon = new L.Icon({ iconUrl: '/marker-icon-black.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })
const goldIcon = new L.Icon({ iconUrl: '/marker-icon-gold.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })
const redIcon = new L.Icon({ iconUrl: '/marker-icon-red.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })

const getMarkerByDate = (unixtime) => {
  const date = dayjs.unix(unixtime);

  if (date.isBefore(dayjs().subtract(3, 'day'))) {
    return blackIcon;
  }

  if (date.isBefore(dayjs().subtract(2, 'day'))) {
    return redIcon;
  }

  if (date.isBefore(dayjs().subtract(1, 'day'))) {
    return goldIcon;
  }

  return greenIcon;
}

export const MapMarker = (props) => {
  const { latitude, longitude, altitude, speed, name, distance, climb, dir, freq, showGOTO, time } = props;
  const position = [parseFloat(latitude), parseFloat(longitude)];
  const title = showGOTO ? <Link to={`/sonde/${name}`}>{name}</Link> : name;


  return (
    <Marker position={position} icon={getMarkerByDate(time)}>
      <Popup>
        <b>{title}</b><br/>
        Lat: {latitude} &nbsp; &nbsp; Lon: {longitude} <br/>
        Alt: {altitude}m &nbsp;&nbsp; Vel: {speed}m/s <br/>
        Dist: {distance}km &nbsp;&nbsp; Dir: {dir}° <br/>
        Climb: {climb}m/s &nbsp;&nbsp; Freq: {freq}MHz <br/>
        Time: {dayjs.unix(time).format('YYYY-MM-DD HH:mm:ss')}
      </Popup>
    </Marker>
  )
}