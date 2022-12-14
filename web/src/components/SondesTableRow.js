import React from 'react';
import { Collapse, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SondeMap } from "./SondeMap";
import dayjs from "dayjs";
import { Links } from "./Links";
import { Link as RouterLink } from "react-router-dom";

export const SondesTableRow = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <RouterLink to={`/sonde/${row.name}`}>{row.name}</RouterLink>
        </TableCell>
        <TableCell>{row.latitude}</TableCell>
        <TableCell>{row.longitude}</TableCell>
        <TableCell>{row.speed}</TableCell>
        <TableCell>{row.dir}</TableCell>
        <TableCell>{row.climb}</TableCell>
        <TableCell>{row.altitude}</TableCell>
        <TableCell>{row.freq}</TableCell>
        <TableCell>{row.distance}</TableCell>
        <TableCell>{dayjs.unix(row.time).format('DD-MM-YYYY HH:mm')}</TableCell>
        <TableCell><Links {...row}/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{height: 350}}>
              <SondeMap {...row} height={300}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
