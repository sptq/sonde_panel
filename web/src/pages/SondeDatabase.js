import React, { useEffect, useState } from 'react';
import { SondesTableTopBar } from '../components/SondesTableTopBar';
import { SondesTable } from '../components/SondesTable';
import Paper from '@mui/material/Paper';

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
      <Paper sx={{ maxWidth: 1200, margin: 'auto', overflow: 'hidden' }}>
        <SondesTableTopBar />
        <SondesTable rows={data} />

        {/*<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">*/}
        {/*  No users for this project yet*/}
        {/*</Typography>*/}
      </Paper>
    </div>
  );
};
