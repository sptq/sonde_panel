import { Injectable } from '@nestjs/common';
import * as child_process from "child_process";

@Injectable()
export class ProcService {
  private processes = ["rtl_tcp","sdrtst","sondeudp","sondemod","udpgate4"];

  async getProc() {
    child_process.exec('ps -C' + this.processes.join(',') + '-o cmd --noheaders', (err, stdout, stderr) => {
      console.log(stdout);
    });
  }


}
