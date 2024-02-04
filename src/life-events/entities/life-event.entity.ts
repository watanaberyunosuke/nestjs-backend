import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Timestamp } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class LifeEvent {
  @PrimaryKey({ type: 'uuid' })
  life_event_id = uuidv4();

  @Property()
  user_id!: string;

  @Property()
  life_event_name: string;

  @Property()
  life_event_description_mongo_id: string;

  @Property()
  life_event_detail_attachment_url: string;

  @Property()
  life_event_category: string;

  @Property({ type: 'date' })
  @Property({ columnType: 'timestamp' })
  create_time: Date;

  @Property({ type: 'date', onUpdate: () => new Date() })
  @Property({ columnType: 'timestamp' })
  update_time: Date;

  @Property()
  update_reason: string;
}
