import { Test, TestingModule } from '@nestjs/testing';
import { CategController } from './categ.controller';

describe('CategController', () => {
  let controller: CategController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategController],
    }).compile();

    controller = module.get<CategController>(CategController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
