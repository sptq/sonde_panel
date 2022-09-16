import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CfgService } from './cfg.service';
import { CreateCfgDto } from './dto/create-cfg.dto';
import { UpdateCfgDto } from './dto/update-cfg.dto';

@Controller('cfg')
export class CfgController {
  constructor(private readonly cfgService: CfgService) {}

  @Post()
  create(@Body() createCfgDto: CreateCfgDto) {
    return this.cfgService.create(createCfgDto);
  }

  @Get()
  findAll() {
    return this.cfgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cfgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCfgDto: UpdateCfgDto) {
    return this.cfgService.update(+id, updateCfgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cfgService.remove(+id);
  }
}
