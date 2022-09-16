import { Test, TestingModule } from '@nestjs/testing';
import { SondeController } from './sonde.controller';
import { SondeService } from './sonde.service';

describe('SondeController', () => {
  let controller: SondeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SondeController],
      providers: [SondeService],
    }).compile();

    controller = module.get<SondeController>(SondeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
