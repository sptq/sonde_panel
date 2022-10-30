import React, { useEffect } from "react";
import { MapControls, openStreetMap } from "../components/MapControlls";
import { HugeMap } from "../components/HugeMap";
import { useSelector } from "react-redux";
import { apiGet } from "../helpers/api";
import { useIntervalCall } from "../helpers/intervalCall";

export const Map = () => {
  const data = useIntervalCall('/api/sonde', [])
  const [url, setUrl] = React.useState(openStreetMap);
  const [position, setPosition] = React.useState();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    apiGet(`/api/station/position`, token)
      .then((data) => {
        setPosition(data);
      });
  }, []);

  return data && position? (
    <div style={{width: '100vw', height: '90vh'}}>
    <MapControls callback={setUrl} />
      <HugeMap url={url} position={position}  height={'90vh'} key={url} data={data}/>
    </div>
  ) : null;
}