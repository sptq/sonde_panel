import { Module } from '@nestjs/common';
import { SdrService } from './sdr.service';
import { SdrController } from './sdr.controller';

@Module({
  controllers: [SdrController],
  providers: [SdrService]
})
export class SdrModule {}
