import { Test, TestingModule } from '@nestjs/testing';
import { ProcController } from './proc.controller';
import { ProcService } from './proc.service';

describe('ProcController', () => {
  let controller: ProcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcController],
      providers: [ProcService],
    }).compile();

    controller = module.get<ProcController>(ProcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
