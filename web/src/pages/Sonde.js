import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SondeMap } from '../components/SondeMap';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { SondeInfo } from '../components/SondeInfo';
import { Links } from '../components/Links';
import Grid from '@mui/material/Grid';

export const Sonde = (props) => {
  const params = useParams();
  const [data, setData] = React.useState(null);

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        fetch(`/api/sonde/${params.name}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return data ? (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper style={{ display: 'flex' }}>
            <Button component={Link} to={'/'} variant={"text"}>
              {'<'} Go Back
            </Button>
            <Links {...data}></Links>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <SondeInfo {...data} />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <SondeMap {...data} height={600} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  ) : null;
};
