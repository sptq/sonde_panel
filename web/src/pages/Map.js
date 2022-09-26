import React, { useEffect } from "react";
import { MapControls, openStreetMap } from "../components/MapControlls";
import { HugeMap } from "../components/HugeMap";

const position = [51.3678, 20.2951];

export const Map = () => {
  const [data, setData] = React.useState([]);
  const [url, setUrl] = React.useState(openStreetMap);

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        fetch(`/api/sonde`, {cache: "no-store"})
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return data ? (
    <div style={{width: '100vw', height: '90vh'}}>
    <MapControls callback={setUrl} />
      <HugeMap url={url} position={position}  height={'90vh'} key={url} data={data}/>
    </div>
  ) : null;
}