import React from 'react';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapControls, openStreetMap } from './MapControlls';
import { Map } from "./Map";

export const SondeMap = (props) => {
  const [url, setUrl] = React.useState(openStreetMap);
  let zoom = 13;
  let height = props.height ? props.height : 400;
  let width = props.width ? props.width : '100%';
  if (props.altitude < 1000) {
    zoom = 15;
  } else if (props.altitude < 2000) {
    zoom = 14;
  } else if (props.altitude < 5000) {
    zoom = 13;
  } else if (props.altitude < 10000) {
    zoom = 12;
  } else if (props.altitude < 20000) {
    zoom = 11;
  }

  return (
    <div style={{ height, width }}>
        <MapControls callback={setUrl} />
        <Map url={url} {...props} zoom={zoom} key={url} style={{ height, width }}/>
    </div>
  );
};
