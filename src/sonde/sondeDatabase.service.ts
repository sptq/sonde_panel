import { Injectable } from '@nestjs/common';
import * as fs from "fs/promises";
import { Cron } from '@nestjs/schedule';
import { JsonDB, Config } from 'node-json-db';

import config from "../app.configuration";

import {mapDataToJson} from "./helpers";
import { join } from "path";

@Injectable()
export class SondeDatabaseService {
  private db: JsonDB;

  constructor() {
    const pathToDB = join(__dirname, '../../', 'tmp')
    this.db = new JsonDB(new Config(pathToDB+"/database.json", true, true, '/'));
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async getDatabaseFromFile() {
    try {
      const data = await fs.readFile(config.DB_FILE_PATH, { encoding: 'utf8' });
      return mapDataToJson(data).reverse();
    } catch (error) {
      console.log(error);
    }
  }

  async checkIfDatabaseExists() {
    const isDBCreated = await this.db.exists('/sonde');
    if (!isDBCreated) {
      const data = await this.getDatabaseFromFile();

      const dataToDB = data.map((record) => {
        record.positions = [[record.latitude, record.longitude]];
        record.color = this.getRandomColor();
        return record;
      });

      return this.db.push('/sonde', dataToDB);
    }
  }

  async checkIfAnyRecordChanged(data) {
    const dataFromDB = await this.db.getData("/sonde");
    return new Promise(() => data.map(async (record, index) => {
      const recordIDInDB =  await this.db.getIndex("/sonde", record.name, 'name');
      if (recordIDInDB !== -1) {
        if (record.time !== dataFromDB[recordIDInDB].time) {
          console.log("Record changed", record.name);
          await this.addRowToDatabase(record, true);
        }
      } else {
        console.log("Record added", record.name);
        await this.addNewRecordToDatabase(record);
      }
    }));
  }

  async addRowToDatabase(row, update = false) {
    if (update) {
      const recordIndexInDB = await this.db.getIndex("/sonde", row.name, 'name');
      const recordInDB = await this.db.getData(`/sonde[${recordIndexInDB}]`);

      recordInDB.positions.push([row.latitude, row.longitude]);
      const newObject = {...recordInDB, ...row};

      return await this.db.push(`/sonde[${recordIndexInDB}]`, newObject);
    }
  }

  async addNewRecordToDatabase(record) {
    record.positions = [[record.latitude, record.longitude]];
    record.color = this.getRandomColor();
    return await this.db.push("/sonde[]", record);
  }

  @Cron('* * * * * *')
  async CronJob() {
    await this.checkIfDatabaseExists();
    const data = await this.getDatabaseFromFile();
    const isChanged = await this.checkIfAnyRecordChanged(data);

    // @ts-ignore
    if (isChanged) {
      console.log("Data changed, updating database");
    }

    console.log("CronJob");
  }


}
