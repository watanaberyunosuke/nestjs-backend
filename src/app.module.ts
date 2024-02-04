import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LifeEventsModule } from './life-events/life-events.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import MikroOrmConfig from './mikro-orm.config';

@Module({
  imports: [LifeEventsModule, MikroOrmModule.forRoot(MikroOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
