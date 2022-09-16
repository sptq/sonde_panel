import { Test, TestingModule } from '@nestjs/testing';
import { SondeService } from './sonde.service';

describe('SondeService', () => {
  let service: SondeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SondeService],
    }).compile();

    service = module.get<SondeService>(SondeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
