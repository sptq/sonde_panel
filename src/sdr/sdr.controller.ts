import { Controller, Get, Param } from "@nestjs/common";
import { SdrService } from './sdr.service';

@Controller('sdr')
export class SdrController {
  constructor(private readonly sdrService: SdrService) {}

  @Get('/:sdrNumber')
  async getSDRStatus(@Param('sdrNumber') sdrNumber: number) {
    const data = await this.sdrService.getSDRSatus(sdrNumber);
    return data;
  }
}
