import { Injectable } from '@nestjs/common';
import { CreateLifeEventDto } from './dto/create-life-event.dto';
import { UpdateLifeEventDto } from './dto/update-life-event.dto';

@Injectable()
export class LifeEventsService {
  create(createLifeEventDto: CreateLifeEventDto) {
    return 'This action adds a new lifeEvent';
  }

  findAll() {
    return `This action returns all lifeEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lifeEvent`;
  }

  update(id: number, updateLifeEventDto: UpdateLifeEventDto) {
    return `This action updates a #${id} lifeEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} lifeEvent`;
  }
}
