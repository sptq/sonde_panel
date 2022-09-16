import { Controller } from '@nestjs/common';
import { SdrService } from './sdr.service';

@Controller('sdr')
export class SdrController {
  constructor(private readonly sdrService: SdrService) {}
}
