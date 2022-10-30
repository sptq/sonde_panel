import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ScheduleModule } from "@nestjs/schedule";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SondeModule } from './sonde/sonde.module';
import { SdrModule } from './sdr/sdr.module';
import { CfgModule } from './cfg/cfg.module';
import { ProcModule } from './proc/proc.module';
import { StationModule } from './station/station.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../web', 'build'),
    }),
    ScheduleModule.forRoot(),
    SondeModule, SdrModule, CfgModule, ProcModule, StationModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
