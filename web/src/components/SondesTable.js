import React  from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import { SondesTableRow } from "./SondesTableRow";

export const SondesTable = (props) => {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Speed</TableCell>
            <TableCell>Dir</TableCell>
            <TableCell>Climb</TableCell>
            <TableCell>Altitude</TableCell>
            <TableCell>Freq</TableCell>
            <TableCell>Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <SondesTableRow key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}