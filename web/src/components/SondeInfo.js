import React from 'react';
import Paper from "@mui/material/Paper";
import { Table, TableBody, TableCell } from "@mui/material";
import dayjs from "dayjs";

export const SondeInfo = (props) => {
  const { name, latitude, longitude, speed, dir, climb, altitude, freq, distance, time } = props;
  return (
    <Paper>
      <h1>{name}</h1>
      <Table>
        <TableBody>
          <TableCell>Latitude: {latitude}</TableCell>
          <TableCell>Longitude: {longitude}</TableCell>
          <TableCell>Speed: {speed}</TableCell>
          <TableCell>Dir: {dir}</TableCell>
          <TableCell>Climb: {climb}</TableCell>
          <TableCell>Altitude: {altitude}</TableCell>
          <TableCell>Freq: {freq}</TableCell>
          <TableCell>Distance: {distance}</TableCell>
          <TableCell>Time: {dayjs.unix(time).format('DD-MM-YYYY HH:mm')}</TableCell>
        </TableBody>
      </Table>
    </Paper>
  );
}