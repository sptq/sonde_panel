import { Controller, Get, Param } from "@nestjs/common";
import { SdrService } from './sdr.service';

@Controller('sdr')
export class SdrController {
  constructor(private readonly sdrService: SdrService) {}

  @Get('/:sdrNumber')
  async getSDRStatus(@Param('sdrNumber') sdrNumber: number) {
    return await this.sdrService.getSDRStatus(sdrNumber);
  }
}
