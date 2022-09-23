import React, { useEffect, useState } from "react";
import { SDRGraph } from "./SDRGraph";
import { Hidden, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";

export const SDRChart = (props) => {
  const { sdr } = props;
  const [data, setData] = useState({
    sdrStatus: [],
    sdrConfig: {}
  });

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if(isMounted) {
        fetch("/api/sdr/" + sdr)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    }
  }, []);

  const freqCount = (freq) => {
    if(freq) {
      const d = freq.split('');
      return `${d[0]}${d[1]}${d[2]}.${d[3]}${d[4]}${d[5]} MHz`;
    }
  }

  const status = data.sdrStatus.map((item) => {
    return (
      <TableRow
        key={item.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {item.id}
        </TableCell>
        <TableCell>{freqCount(item.freq)}</TableCell>
        <TableCell>{item.deviation}</TableCell>
        <TableCell>{item.noise}</TableCell>
        <TableCell><SDRGraph graph={item.graph}/></TableCell>
      </TableRow>
    )
  });

  const mobileStatus = data.sdrStatus.map((item) => {
    return (<div key={item.id} style={{display: 'flex', justifyContent: 'space-between'}}><div>{item.id} &nbsp; {freqCount(item.freq)} &nbsp; {item.deviation} &nbsp; {item.noise}</div> <SDRGraph graph={item.graph} size={10}/></div>)
  });


  const { gain, freq, ppm } = data.sdrConfig;
  return data ? (
    <div>
      {/*<Hidden smDown>*/}
      {/*<h2>SDR #{sdr}</h2>*/}
      {/*<div style={{height: 60}}><b>Freq:</b> {freq ? freqCount(freq) : ''} <b>PPM:</b> {ppm} <b>Gain</b>{gain}</div>*/}
      {/*<TableContainer component={Paper}>*/}
      {/*  <Table sx={{ minWidth: 650 }} aria-label="simple table" size={'small'}>*/}
      {/*    <TableHead>*/}
      {/*      <TableRow>*/}
      {/*        <TableCell>Id</TableCell>*/}
      {/*        <TableCell>Freq</TableCell>*/}
      {/*        <TableCell>Deviation</TableCell>*/}
      {/*        <TableCell>Noise</TableCell>*/}
      {/*        <TableCell>Char</TableCell>*/}
      {/*      </TableRow>*/}
      {/*    </TableHead>*/}
      {/*    <TableBody>*/}
      {/*      {status}*/}
      {/*    </TableBody>*/}
      {/*  </Table>*/}
      {/*</TableContainer>*/}
      {/*</Hidden>*/}
      {/*<Hidden mdUp>*/}
          <h2>SDR #{sdr}</h2>
          <div style={{height: 60}}><b>Freq:</b> {freq ? freqCount(freq) : ''} <b>PPM:</b> {ppm} <b>Gain</b>{gain}</div>
          <div style={{margin: 10}}>
            {mobileStatus}
          </div>
      {/*</Hidden>*/}
    </div>
  ): null;
}
