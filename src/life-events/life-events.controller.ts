import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LifeEventsService } from './life-events.service';
import { CreateLifeEventDto } from './dto/create-life-event.dto';
import { UpdateLifeEventDto } from './dto/update-life-event.dto';

@Controller('life-events')
export class LifeEventsController {
  constructor(private readonly lifeEventsService: LifeEventsService) {}

  @Post()
  create(@Body() createLifeEventDto: CreateLifeEventDto) {
    return this.lifeEventsService.create(createLifeEventDto);
  }

  @Get()
  findAll() {
    return this.lifeEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifeEventsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLifeEventDto: UpdateLifeEventDto,
  ) {
    return this.lifeEventsService.update(+id, updateLifeEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifeEventsService.remove(+id);
  }
}
