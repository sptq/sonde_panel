import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { apiGet } from "../helpers/api";

export const Processes = () => {
  const [data, setData] = useState();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        apiGet('/api/proc', token)
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);


  const renderProcesses = (data) => data.map((process, index) => {
    return <div key={index}>{process}</div>
  });

  return data ? (
    <div>
      <h1>Procesy</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <Typography variant={'subtitle1'}>Active:</Typography>
            <div style={{fontSize: 10, textAlign: 'left', marginLeft: 10, marginBottom: 10}}>{renderProcesses(data.active)}</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ width: '98%', margin: 'auto', overflow: 'hidden' }}>
            <Typography variant={'subtitle1'}>Absent:</Typography>
            <div style={{fontSize: 10, textAlign: 'left', marginLeft: 10, marginBottom: 10}}>{renderProcesses(data.absent)}</div>
          </Paper>
        </Grid>

      </Grid>
    </div>
  ): null;
}