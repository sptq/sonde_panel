import { Controller, Get } from "@nestjs/common";
import { StationService } from './station.service';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get('sdr_count')
  getSdrCount() {
    return this.stationService.getSdrCount();
  }

  @Get('position')
  getPosiotion() {
    return this.stationService.getPosiotion();
  }

  @Get('stats')
  async getStationMemory() {
    const memory = await this.stationService.getStationMemory();
    const uptime = await this.stationService.getUptime();

    return {
      memory,
      uptime,
    }
  }
}
