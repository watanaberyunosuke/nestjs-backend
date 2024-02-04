import { Test, TestingModule } from '@nestjs/testing';
import { LifeEventsController } from './life-events.controller';
import { LifeEventsService } from './life-events.service';

describe('LifeEventsController', () => {
  let controller: LifeEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifeEventsController],
      providers: [LifeEventsService],
    }).compile();

    controller = module.get<LifeEventsController>(LifeEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
