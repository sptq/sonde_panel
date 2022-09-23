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
    <div>
      <div>
        <MapControls callback={setUrl} />
      </div>
      <div style={{ height, width: '100%' }}>
        <Map url={url} {...props} zoom={zoom} key={url}/>
      </div>
    </div>
  );
};
