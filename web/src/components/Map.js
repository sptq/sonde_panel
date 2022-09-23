import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ScaleControl, Polyline} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';


export const Map = (props) => {
  const { latitude, longitude, altitude, speed, name, url, zoom,distance, climb, dir, freq  } = props;
  const position = [parseFloat(latitude), parseFloat(longitude)];

  return (

    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={url}
      />

      <ScaleControl />

      <Marker position={position}>
        <Popup>
          <b>{name}</b><br/>
          Lat: {latitude} &nbsp; &nbsp; Lon: {longitude} <br/>
          Alt: {altitude}m &nbsp;&nbsp; Vel: {speed}m/s <br/>
          Dist: {distance}km &nbsp;&nbsp; Dir: {dir}° <br/>
          Climb: {climb}m/s &nbsp;&nbsp; Freq: {freq}MHz <br/>
        </Popup>
      </Marker>
      <Polyline pathOptions={{ color: 'red' }} positions={[position]} />
    </MapContainer>
  );
};
