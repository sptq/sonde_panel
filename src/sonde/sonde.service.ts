import { Injectable } from '@nestjs/common';
import config from "../app.configuration";
import * as fs from "fs/promises";
@Injectable()
export class SondeService {

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
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

  mapDataToJson(data: string) {
    const rows_name = ['name', 'latitude', 'longitude', 'altitude', 'speed', 'climb', 'dir', 'freq', 'time']
    let splitData = data.split("\n");
    let json = [];
    for (let i = 0; i < splitData.length; i++) {
      let splitRow = splitData[i].split(";");
      let row = {};
      for (let j = 0; j < splitRow.length; j++) {
        row[rows_name[j]] = splitRow[j];
      }
      row['distance'] = this.calculateDistance(config.LAN, config.LON, row['latitude'], row['longitude']);

      if (row['name'] !== '') json.push(row);
    }

    return json;
  }

  async getDatabaseFromFile() {
   try {
     const data = await fs.readFile(config.DB_FILE_PATH, { encoding: 'utf8' });
     console.log(data);
     return this.mapDataToJson(data).reverse();
   } catch (error) {
    console.log(error);
   }
  }

  async getDatabaseByName(name: string) {
    try {
      const data = await this.getDatabaseFromFile();
      return data.find((row: any) => row.name === name);
    } catch (error) {
      console.log(error);
    }
  }
}
