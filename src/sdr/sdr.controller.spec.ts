import { Test, TestingModule } from '@nestjs/testing';
import { SdrController } from './sdr.controller';
import { SdrService } from './sdr.service';

describe('SdrController', () => {
  let controller: SdrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SdrController],
      providers: [SdrService],
    }).compile();

    controller = module.get<SdrController>(SdrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
