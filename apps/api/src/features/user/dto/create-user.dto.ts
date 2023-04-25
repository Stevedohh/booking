import { IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
    email: string;

  @IsString()
    password: string;

  @IsPhoneNumber()
    phone: string;

  @IsString()
    first_name: string

  @IsString()
    second_name: string
}
