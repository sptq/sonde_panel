import { Injectable } from '@nestjs/common';
import * as fs from "fs/promises";
import { join } from "path";
import { JsonDB, Config } from 'node-json-db';

import config from "../app.configuration";
import { mapDataToJson } from "./helpers";

@Injectable()
export class SondeService {

  private db: JsonDB;

  constructor() {
    const pathToDB = join(__dirname, '../../', 'tmp')
    this.db = new JsonDB(new Config(pathToDB+"/database.json", true, true, '/'));
  }

  async getSondes() {
    try {
      await this.db.reload();
      return await this.db.getData("/sonde");
    } catch (error) {
      console.log(error);
    }
  }

  async getSonde(name: string){
    try {
      await this.db.reload();
      const data = await this.getSondes();
      return data.find((row: any) => row.name === name);
    } catch (error) {
      console.log(error);
    }
  }

  async getDatabaseFromFile() {
    try {
      const data = await fs.readFile(config.DB_FILE_PATH, { encoding: 'utf8' });
      return mapDataToJson(data).reverse();
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
