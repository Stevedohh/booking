import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../auth/roles-auth.decorator';
import { Roles } from '../../types';
import { RolesGuard } from '../auth/role.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
