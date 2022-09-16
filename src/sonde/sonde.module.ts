import { Module } from '@nestjs/common';
import { SondeService } from './sonde.service';
import { SondeController } from './sonde.controller';

@Module({
  controllers: [SondeController],
  providers: [SondeService]
})
export class SondeModule {}
