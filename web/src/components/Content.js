import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Outlet } from "react-router-dom";

export default function Content() {

  return (
      <Outlet/>
  );
}
