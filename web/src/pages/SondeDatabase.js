import React from 'react';
import { SondesTableTopBar } from '../components/SondesTableTopBar';
import { SondesTable } from '../components/SondesTable';
import Paper from '@mui/material/Paper';
import { Hidden } from "@mui/material";
import { SondesCards } from "../components/SondesCards";
import { useIntervalCall } from "../helpers/intervalCall";

export const SondeDatabase = () => {
  const data = useIntervalCall('/api/sonde', []);

  return (
    <div>
      <h1>Lista sond</h1>
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
