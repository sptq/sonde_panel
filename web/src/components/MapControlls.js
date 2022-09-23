import React from 'react';
import { Button, Hidden, Menu, MenuItem } from "@mui/material";

export const openStreetMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const openTopoMap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
export const arcgisOnline = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const cyclosm = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
export const landscape = 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
export const outdoors = 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png';
export const lima = 'https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo'

export const MapControls = (props) => {
  const {callback} = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Hidden smDown>
      <Button onClick={() => callback(openStreetMap)}>OpenStreetMap</Button>
      <Button onClick={() => callback(openTopoMap)}>OpenTopoMap</Button>
      <Button onClick={() => callback(arcgisOnline)}>ArcGIS Online</Button>
      <Button onClick={() => callback(cyclosm)}>Cyclosm</Button>
      <Button onClick={() => callback(landscape)}>Landscape</Button>
      <Button onClick={() => callback(outdoors)}>Outdoors</Button>
      <Button onClick={() => callback(lima)}>Lima</Button>
      </Hidden>
      <Hidden smUp>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}

        >
          Raster
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => callback(openStreetMap)}>OpenStreetMap</MenuItem>
          <MenuItem onClick={() => callback(openTopoMap)}>OpenTopoMap</MenuItem>
          <MenuItem onClick={() => callback(arcgisOnline)}>ArcGIS Online</MenuItem>
          <MenuItem onClick={() => callback(cyclosm)}>Cyclosm</MenuItem>
          <MenuItem onClick={() => callback(landscape)}>Landscape</MenuItem>
          <MenuItem onClick={() => callback(outdoors)}>Outdoors</MenuItem>
          <MenuItem onClick={() => callback(lima)}>Lima</MenuItem>
        </Menu>
      </Hidden>
    </div>
  )
}