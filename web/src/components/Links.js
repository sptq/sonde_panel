import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

export const Links = (props) => {
  const { longitude, latitude, name } = props;

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
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Links
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
        <MenuItem>
          <a
            href={`geo:0,0?q=${longitude},${latitude}(${name})`}
            style={{ textDecoration: 'none' }}
            target={'_blank'}
          >
            Geo
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={`https://www.openstreetmap.org/?map=13&mlat=${latitude}&mlon=${longitude}?m`}
            style={{ textDecoration: 'none' }}
            target={'_blank'}
          >
            OST
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={`https://www.google.pl/maps/place/${latitude},${longitude}`}
            style={{ textDecoration: 'none' }}
            target={'_blank'}
          >
            Google
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={`https://aprs.fi/#!call=${name}`}
            style={{ textDecoration: 'none' }}
            target={'_blank'}
          >
            APRSFI
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={`https://radiosondy.info/sonde_archive.php?sondenumber=${name}`}
            style={{ textDecoration: 'none' }}
            target={'_blank'}
          >
            KXY
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};
