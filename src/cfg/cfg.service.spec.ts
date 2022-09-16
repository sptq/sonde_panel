import { Test, TestingModule } from '@nestjs/testing';
import { CfgService } from './cfg.service';

describe('CfgService', () => {
  let service: CfgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CfgService],
    }).compile();

    service = module.get<CfgService>(CfgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
