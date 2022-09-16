import { PartialType } from '@nestjs/mapped-types';
import { CreateCfgDto } from './create-cfg.dto';

export class UpdateCfgDto extends PartialType(CreateCfgDto) {}
