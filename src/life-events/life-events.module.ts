import { Module } from '@nestjs/common';
import { LifeEventsService } from './life-events.service';
import { LifeEventsController } from './life-events.controller';

@Module({
  controllers: [LifeEventsController],
  providers: [LifeEventsService],
})
export class LifeEventsModule {}
