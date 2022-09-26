import config from "../app.configuration";

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) =>  {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  return parseFloat((d/1000) + '').toFixed(2);
}


export const mapDataToJson = (data: string) =>  {
  const rows_name = ['name', 'latitude', 'longitude', 'altitude', 'speed', 'climb', 'dir', 'freq', 'time']
  let splitData = data.split("\n");
  let json = [];
  for (let i = 0; i < splitData.length; i++) {
    let splitRow = splitData[i].split(";");
    let row = {};
    for (let j = 0; j < splitRow.length; j++) {
      row[rows_name[j]] = splitRow[j];
    }
    row['distance'] = calculateDistance(config.LAN, config.LON, row['latitude'], row['longitude']);

    if (row['name'] !== '') json.push(row);
  }

  return json;
}