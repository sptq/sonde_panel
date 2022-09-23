import { Controller, Get } from "@nestjs/common";
import { SondeService } from './sonde.service';

@Controller('sonde')
export class SondeController {
  constructor(private readonly sondeService: SondeService) {}

  @Get('/')
  async getDatabase() {
    return await this.sondeService.getDatabaseFromFile();
  }
}
