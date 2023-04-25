import { IsDate, IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
    room_id

  @IsDate()
    start_date;

  @IsDate()
    end_date;

  @IsEmail()
    email;

  @IsPhoneNumber()
    phone;

  @IsNumber()
    user;

  @IsString()
    first_name;

  @IsString()
    second_name
}
