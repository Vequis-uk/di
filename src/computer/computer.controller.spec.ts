import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from './computer.controller';

describe('ComputerController', () => {
  let service: ComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputerController],
    }).compile();

    service = module.get<ComputerController>(ComputerController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
