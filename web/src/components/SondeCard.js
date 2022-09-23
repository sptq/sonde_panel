import React  from "react";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse } from "@mui/material";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Links } from "./Links";
import { Link } from "react-router-dom";
import { SondeMap } from "./SondeMap";

export const SondeCard = (props) => {
  const { name, latitude, longitude, speed, dir, climb, altitude, freq, distance, time} = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100vw', margin: 1 }}>
      <CardHeader
        title={name}
        subheader={dayjs.unix(time).format('DD-MM-YYYY HH:mm')}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lat: {latitude} &nbsp; &nbsp; Lon: {longitude} <br/>
          Alt: {altitude}m &nbsp;&nbsp; Vel: {speed}m/s <br/>
          Dist: {distance}km &nbsp;&nbsp; Dir: {dir}° <br/>
          Climb: {climb}m/s &nbsp;&nbsp; Freq: {freq}MHz <br/>
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: "space-between"}}>
        <Button onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">Show minimap</Button>
        <Button component={Link} to={`sonde/${name}`}>Open Sonde</Button>
        <Links {...props} />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <SondeMap {...props} height={300}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}