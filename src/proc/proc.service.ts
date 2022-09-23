import { Injectable } from '@nestjs/common';
import * as child_process from "child_process";

@Injectable()
export class ProcService {
  private processes = ["rtl_tcp","sdrtst","sondeudp","sondemod","udpgate4"];

  async getProc() {
    return await new Promise((resolve, reject) => {
      const cmd = 'ps -C ' + this.processes.join(',') + ' -o cmd --noheaders';
      child_process.exec(cmd, (err, stdout, stderr) => {
        const lines = stdout.split('\n');
        const active = lines.filter(line => {
          return this.processes.some(proc => line.includes(proc));
        });

        const absent = this.processes.filter(line => {
          return !active.some(proc => proc.includes(line));
        });

        resolve(
          {active, absent}
        );
      });
    });
  }

}
