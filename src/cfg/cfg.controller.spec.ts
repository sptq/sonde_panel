import { Test, TestingModule } from '@nestjs/testing';
import { CfgController } from './cfg.controller';
import { CfgService } from './cfg.service';

describe('CfgController', () => {
  let controller: CfgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CfgController],
      providers: [CfgService],
    }).compile();

    controller = module.get<CfgController>(CfgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
