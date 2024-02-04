import { Test, TestingModule } from '@nestjs/testing';
import { LifeEventsService } from './life-events.service';

describe('LifeEventsService', () => {
  let service: LifeEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeEventsService],
    }).compile();

    service = module.get<LifeEventsService>(LifeEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
