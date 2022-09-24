import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SondeMap } from '../components/SondeMap';
import { Button, Hidden } from '@mui/material';
import Paper from '@mui/material/Paper';
import { SondeInfo } from '../components/SondeInfo';
import { Links } from '../components/Links';
import Grid from '@mui/material/Grid';

export const Sonde = (props) => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [positions, setPositions] = React.useState([]);

  const checkPositions = (latitude, longitude) => {
    if (latitude && longitude) {
      const position = [parseFloat(latitude), parseFloat(longitude)];
      if (positions.length === 0) {
        setPositions([position]);
      } else {
        const lastPosition = positions[positions.length - 1];
        if (lastPosition[0] !== position[0] || lastPosition[1] !== position[1]) {
          const newPositions = [...positions];
          newPositions.push(position)
          setPositions(newPositions);
        }
      }
    }
  }


  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        fetch(`/api/sonde/${params.name}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            checkPositions(data.latitude, data.longitude);
          });
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return data ? (
    <div>
      <Hidden smDown>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper style={{ display: 'flex' }}>
              <Button component={Link} to={'/'} variant={'text'}>
                {'<'} Wstecz
              </Button>
              <Links {...data}></Links>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <SondeInfo {...data} />
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <SondeMap {...data} height={600} positions={positions} />
            </Paper>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Paper>
          <SondeMap {...data} height={'90vh'} positions={positions} />
          <div style={{position: "absolute", bottom: 0, left: 0, right: 0, margin: '0 auto', zIndex: 1000}}>
            <b>{data.name}</b><br/>
            Lat: {data.latitude} &nbsp; &nbsp; Lon: {data.longitude} <br/>
            Alt: {data.altitude}m &nbsp;&nbsp; Vel: {data.speed}m/s <br/>
            Dist: {data.distance}km &nbsp;&nbsp; Dir: {data.dir}° <br/>
            Climb: {data.climb}m/s &nbsp;&nbsp; Freq: {data.freq}MHz <br/>
          </div>
        </Paper>
        <div style={{position: "absolute", bottom: 10, right: 0, zIndex: 1000}}>
          <Links {...data}/>
        </div>
      </Hidden>
    </div>
  ) : null;
};
