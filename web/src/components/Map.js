import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ScaleControl, Polyline} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapMarker } from "./MapMarker";


export const Map = (props) => {
  const { latitude, longitude, url, zoom, positions} = props;
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
      <Polyline positions={positions} pathOptions={{ color: 'red' }} key={positions.length}/>
      <MapMarker {...props} />
    </MapContainer>
  );
};
