import { Test, TestingModule } from '@nestjs/testing';
import { CategService } from './categ.service';

describe('CategService', () => {
  let service: CategService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategService],
    }).compile();

    service = module.get<CategService>(CategService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
