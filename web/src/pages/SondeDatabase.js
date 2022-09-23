import React, { useEffect, useState } from 'react';
import { SondesTableTopBar } from '../components/SondesTableTopBar';
import { SondesTable } from '../components/SondesTable';
import Paper from '@mui/material/Paper';
import { Hidden } from "@mui/material";
import { SondesCards } from "../components/SondesCards";

export const SondeDatabase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        fetch('/api/sonde')
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Sonde table</h1>
      <Hidden smDown>
        <Paper sx={{ maxWidth: 1200, margin: 'auto', overflow: 'hidden' }}>
          <SondesTableTopBar />
          <SondesTable rows={data} />
        </Paper>
      </Hidden>
      <Hidden smUp>
        <SondesCards rows={data} />
      </Hidden>
    </div>
  );
};
