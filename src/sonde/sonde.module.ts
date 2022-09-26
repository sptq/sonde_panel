import { Module } from '@nestjs/common';
import { SondeService } from './sonde.service';
import { SondeController } from './sonde.controller';
import { SondeDatabaseService } from "./sondeDatabase.service";

@Module({
  controllers: [SondeController],
  providers: [SondeService, SondeDatabaseService]
})
export class SondeModule {}
