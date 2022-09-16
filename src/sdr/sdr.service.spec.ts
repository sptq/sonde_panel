import { Test, TestingModule } from '@nestjs/testing';
import { SdrService } from './sdr.service';

describe('SdrService', () => {
  let service: SdrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SdrService],
    }).compile();

    service = module.get<SdrService>(SdrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
