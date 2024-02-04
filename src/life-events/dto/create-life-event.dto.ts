import { IsString, IsOptional, IsUUID, IsDate, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class LifeEventDto {
  @IsUUID()
  life_event_id!: string;

  @IsString()
  user_id!: string;

  @IsString()
  life_event_name!: string;

  @IsString()
  life_event_description_mongo_id!: string;

  @IsUrl()
  @IsOptional()
  life_event_detail_attachment_url?: string;

  @IsString()
  life_event_category!: string;

  @Type(() => Date)
  @IsDate()
  create_time!: Date;

  @Type(() => Date)
  @IsDate()
  update_time!: Date;

  @IsString()
  @IsOptional()
  update_reason?: string;
}
