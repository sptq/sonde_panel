import React, { useEffect, useState } from "react";

export const Status = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        fetch('/api/station/stats')
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
    <div>
      <h1>Pamięć</h1>
      {data.total}<br/>
      {data.used}<br/>
      {data.free}<br/>
      {data.shared}<br/>
      {data.buff_cache}<br/>
      {data.available}<br/>

    </div>
  ): null;
}