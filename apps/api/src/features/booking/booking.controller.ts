import { Body, Controller, Get, Param, Post, UseGuards, Req, Patch, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Role } from '../auth/roles-auth.decorator';
import { Roles } from '../../types';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {
  }

  @Role(Roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAll() {
    return this.bookingService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.bookingService.getById(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post('/user')
  getByUser(@Req() request) {
    return this.bookingService.getByUser(request?.user?.id)
  }

  @Post()
  create(@Body() createBooking: CreateBookingDto) {
    return this.bookingService.create(createBooking);
  }

  @Patch('/:id')
  update(@Body() updateBooking: CreateBookingDto, @Param('id') id: string) {
    return this.bookingService.update(Number(id), updateBooking);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(Number(id));
  }
}
