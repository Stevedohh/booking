import { IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
    people_count: number;

  @IsString()
    bed_type: string;

  @IsNumber()
    price: number;

  @IsString()
    title: string;

  @IsString()
    description: string;

  @IsString()
    image_url: string;

  @IsString()
    long_description: string;

  @IsString()
    subtitle: string;
}
