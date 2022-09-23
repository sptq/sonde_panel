import { Controller, Get } from "@nestjs/common";
import { ProcService } from './proc.service';

@Controller('proc')
export class ProcController {
  constructor(private readonly procService: ProcService) {}

  @Get('/')
  getProc() {
    return this.procService.getProc();
  }
}
