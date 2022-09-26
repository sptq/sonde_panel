import { Injectable } from '@nestjs/common';
import appConfiguration from "../app.configuration";

@Injectable()
export class StationService {

  getSdrCount() {
    return appConfiguration.NUMBERS_OF_SDRS;
  }

  getPosiotion() {
    return [ appConfiguration.LAN,appConfiguration.LON];
  }

}
