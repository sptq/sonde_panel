import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { SDRChart } from '../components/SDRChart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const SDR = () => {
  return (
    <div>
      <h1>SDR Status</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <SDRChart sdr="1" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <SDRChart sdr="2" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <SDRChart sdr="3" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <SDRChart sdr="4" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
