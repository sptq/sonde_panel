import { Injectable } from '@nestjs/common';
import appConfiguration from "../app.configuration";
import * as child_process from "child_process";

@Injectable()
export class StationService {

  getSdrCount() {
    return appConfiguration.NUMBERS_OF_SDRS;
  }

  getPosiotion() {
    return [appConfiguration.LAN, appConfiguration.LON];
  }

  async getStationMemory () {
    const cmd = 'free -m';

    return await new Promise((resolve, reject) => {
      child_process.exec(cmd, (err, stdout, stderr) => {
        const lines = stdout.split('\n');
        const mem = lines[1].split(' ').filter((x) => x !== '');
        resolve({
          total: mem[1],
          used: mem[2],
          free: mem[3],
          shared: mem[4],
          buff_cache: mem[5],
          available: mem[6],
        });
      });
    });
  }

  async getUptime () {
    const cmd = 'uptime';

    return await new Promise((resolve, reject) => {
      child_process.exec(cmd, (err, stdout, stderr) => {
        const lines = stdout.split('\n');
        const uptime = lines[0].split(' ').filter((x) => x !== '');
        resolve(uptime.join(' '));
      });
    });
  }
}
