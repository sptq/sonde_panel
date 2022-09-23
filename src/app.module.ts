import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SondeModule } from './sonde/sonde.module';
import { SdrModule } from './sdr/sdr.module';
import { CfgModule } from './cfg/cfg.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../web', 'build'),
    }),
    SondeModule, SdrModule, CfgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
