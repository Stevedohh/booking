import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { Role } from '../auth/roles-auth.decorator';
import { Roles } from '../../types';
import { RolesGuard } from '../auth/role.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getAll() {
    return this.roomService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.roomService.getById(Number(id));
  }

  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateRoomDto: CreateRoomDto
  ) {
    return this.roomService.update(Number(id), updateRoomDto);
  }

  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  remove(
    @Param('id') id: string,
  ) {
    return this.roomService.remove(Number(id));
  }
}
