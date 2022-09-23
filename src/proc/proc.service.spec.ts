import { Test, TestingModule } from '@nestjs/testing';
import { ProcService } from './proc.service';

describe('ProcService', () => {
  let service: ProcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcService],
    }).compile();

    service = module.get<ProcService>(ProcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
