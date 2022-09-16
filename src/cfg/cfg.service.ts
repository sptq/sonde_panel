import { Injectable } from '@nestjs/common';
import { CreateCfgDto } from './dto/create-cfg.dto';
import { UpdateCfgDto } from './dto/update-cfg.dto';

@Injectable()
export class CfgService {
  create(createCfgDto: CreateCfgDto) {
    return 'This action adds a new cfg';
  }

  findAll() {
    return `This action returns all cfg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cfg`;
  }

  update(id: number, updateCfgDto: UpdateCfgDto) {
    return `This action updates a #${id} cfg`;
  }

  remove(id: number) {
    return `This action removes a #${id} cfg`;
  }
}
