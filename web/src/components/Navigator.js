import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SettingsIcon from '@mui/icons-material/Settings';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import MapIcon from '@mui/icons-material/Map';
import { Link as RouterLink } from "react-router-dom";

const categories = [
  {
    id: 'Lokalna stacja',
    children: [
      { id: 'Sondy', icon: <DnsRoundedIcon />, link: '/' },
      { id: 'Mapa', icon: <MapIcon />, link: '/map' },
      { id: 'SDR', icon: <PermMediaOutlinedIcon />, link: '/sdr' },
      { id: 'Procesy', icon: <RunningWithErrorsIcon />, link: '/processes' },
      { id: 'Konfiguracja SDR', icon: <SettingsIcon />, link: '/sdr-configuration' },
      { id: 'Konfiguracja Aplikacji', icon: <SettingsIcon />, link: '/app-configuration' },
    ],
  },
  {
    id: 'Zdalna baza',
    children: [
      { id: 'Ustawienia Połaczenia', icon: <SettingsIcon />, link: '/remote-connection' },
      { id: 'Baza Sond', icon: <DnsRoundedIcon />, link: '/remote-sonde-database' },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};



export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          RadioSonde v2
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item} to={link} component={RouterLink}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
