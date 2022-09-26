import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { SDRChart } from '../components/SDRChart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const SDR = () => {

  const [sdr, setSdr] = useState();
  useEffect(() => {
    fetch(`/api/station/sdr_count`, {cache: "no-store"})
      .then((res) => res.json())
      .then((data) => {
        setSdr(parseInt(data));
      });
  })

  const renderSDR = (sdr) => {
      return (
        <Grid item xs={12} md={12} lg={6} key={sdr}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <SDRChart sdr={sdr} />
          </Paper>
        </Grid>
      )
  }

  const renserSDRList = (sdr) => {
    let sdrList = [];
    for (let i = 0; i < sdr; i++) {
      sdrList.push(renderSDR(i+1));
    }
    return sdrList;
  }

  return sdr ? (
    <div>
      <h1>Status SDR</h1>
      <Grid container spacing={4}>
        {renserSDRList(sdr)}
      </Grid>
    </div>
  ) : null;
};
