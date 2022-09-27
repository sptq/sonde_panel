import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ScaleControl, Polyline} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapMarker } from "./MapMarker";

export const Map = (props) => {
  const { latitude, longitude, url, zoom, positions, color} = props;
  const position = [parseFloat(latitude), parseFloat(longitude)];


  console.log('Sonde position', positions);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={url}
      />

      <ScaleControl />
      <Polyline positions={positions} pathOptions={{ color: color}} key={positions.length}/>
      <MapMarker {...props} />
    </MapContainer>
  );
};
