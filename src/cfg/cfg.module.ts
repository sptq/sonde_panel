import { Module } from '@nestjs/common';
import { CfgService } from './cfg.service';
import { CfgController } from './cfg.controller';

@Module({
  controllers: [CfgController],
  providers: [CfgService]
})
export class CfgModule {}
