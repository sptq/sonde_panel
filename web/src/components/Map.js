import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

export const Map = (props) => {
  const { latitude, longitude, altitude, speed, name, url, zoom } = props;
  const position = [parseFloat(latitude), parseFloat(longitude)];

  return (

    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />

      <Marker position={position}>
        <Popup>
          {name} {latitude} {longitude} {altitude} {speed}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
