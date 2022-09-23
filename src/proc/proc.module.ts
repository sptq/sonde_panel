import { Module } from '@nestjs/common';
import { ProcService } from './proc.service';
import { ProcController } from './proc.controller';

@Module({
  controllers: [ProcController],
  providers: [ProcService]
})
export class ProcModule {}
